import React from 'react';
import dynamic from 'next/dynamic';

const GitHubChart = dynamic(() => import('../components/github-chart'), {
  ssr: false,
});

import GitHubLegend from '../components/github-legend';

const Page = ({ data }) => {
  return (
    <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
      <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
        <GitHubChart data={data.sort((a, b) => a.value - b.value)} />
      </div>
      <div className='flex bg-gray-800 rounded border border-gray-700 p-4 md:p-8'>
        <GitHubLegend data={data.sort((a, b) => b.value - a.value)} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}` },
      body: JSON.stringify({
        query: `
          query {
            viewer {
              repositories(last: 100) {
                nodes {
                  languages(first: 10) {
                    nodes {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Bad response');
    }

    const {
      data: {
        viewer: {
          repositories: { nodes },
        },
      },
    } = await response.json();

    const data = nodes
      .map((chart) => {
        return chart.languages.nodes.map((node) => {
          const { name, color } = node;
          return {
            name,
            color,
          };
        });
      })
      .filter((array) => array.length !== 0)
      .flat()
      .reduce((items, item) => {
        const { name, color } = item;
        const exists = items.find((index) => index.name === name);

        if (exists) {
          exists.value += 1;
        } else {
          items.push({
            name,
            color,
            value: 1,
          });
        }

        return items;
      }, [])
      .slice(0, 9);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'error',
      },
    };
  }
}

export default Page;
