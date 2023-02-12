import React from 'react';

import GitHubChart from '../components/github-chart';
import GitHubLegend from '../components/github-legend';

const Page = ({ data }) => {
  return (
    <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
      <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
        <GitHubChart data={data} />
      </div>
      <div className='flex bg-gray-800 rounded border border-gray-700 p-4 md:p-8'>
        <GitHubLegend data={data} />
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
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    const total_value = data.reduce((a, b) => a + b.value, 0);
    const percent = (num) => Math.round((num / total_value) * 100);
    const degrees = (percent) => Math.round((percent / 100) * 360);

    const chart_data = data.reduce((items, item, index, array) => {
      items.push(item);

      item.count = item.count || 0;
      item.count += array[index - 1]?.count || 0;
      item.start_value = item.start_value || array[index - 1]?.count ? array[index - 1].count : 0;
      item.end_value = item.count += item.value;
      item.start_percent = percent(item.start_value);
      item.end_percent = percent(item.end_value);
      item.start_degrees = degrees(item.start_percent);
      item.end_degrees = degrees(item.end_percent);

      return items;
    }, []);

    return {
      props: {
        data: chart_data,
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
