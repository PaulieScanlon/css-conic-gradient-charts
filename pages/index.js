import React from 'react';

import DonutChartClipPathDynamicColors from '../components/donut-chart-clip-path-dynamic-colors';
import DonutChartClipPathSetColors from '../components/donut-chart-clip-path-set-colors';
import DonutChartSolidCircle from '../components/donut-chart-solid-circle';
import PieChart from '../components/pie-chart';

const Page = () => {
  return (
    <section className='grid gap-8 sm:gap-16 place-content-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='m-0 text-white text-3xl sm:text-6xl text-center font-black'>CSS conic-gradient Charts</h1>
        <p className='m-0 text-center text-gray-400 '>
          Create Donut or Pie Charts using the CSS{' '}
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient'
            target='_blank'
            rel='noopener'
            className='text-pink-400 hover:text-pink-500'
          >
            conic-gradient
          </a>
        </p>
      </div>
      <div className='flex justify-center overflow-x-auto'>
        <pre className='m-0 max-w-2xl'>
          background:conic-gradient(var(--color-pink-500) 0deg 137deg, var(--color-pink-400) 137deg 209deg,
          var(--color-pink-300) 209deg 263deg, var(--color-pink-200) 263deg 342deg, var(--color-pink-100) 342deg 360deg
        </pre>
      </div>
      <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8'>
        <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
          <DonutChartClipPathDynamicColors
            data={[
              {
                name: 'Cluster 1',
                value: 450,
              },
              {
                name: 'Cluster 2',
                value: 230,
              },
              {
                name: 'Cluster 3',
                value: 180,
              },
              {
                name: 'Cluster 4',
                value: 260,
              },
              {
                name: 'Cluster 5',
                value: 60,
              },
            ]}
          />
        </div>
        <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
          <DonutChartClipPathSetColors
            data={[
              {
                name: 'Cluster 1',
                value: 450,
                color: 'var(--color-fuchsia-500)',
              },
              {
                name: 'Cluster 2',
                value: 230,
                color: 'var(--color-fuchsia-400)',
              },
              {
                name: 'Cluster 3',
                value: 180,
                color: 'var(--color-fuchsia-300)',
              },
              {
                name: 'Cluster 4',
                value: 260,
                color: 'var(--color-fuchsia-200)',
              },
              {
                name: 'Cluster 5',
                value: 60,
                color: 'var(--color-fuchsia-100)',
              },
            ]}
          />
        </div>
        <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
          <DonutChartSolidCircle
            data={[
              {
                name: 'Cluster 1',
                value: 450,
              },
              {
                name: 'Cluster 2',
                value: 230,
              },
              {
                name: 'Cluster 3',
                value: 180,
              },
              {
                name: 'Cluster 4',
                value: 260,
              },
              {
                name: 'Cluster 5',
                value: 60,
              },
            ]}
          />
        </div>
        <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
          <PieChart
            data={[
              {
                name: 'Cluster 1',
                value: 450,
              },
              {
                name: 'Cluster 2',
                value: 230,
              },
              {
                name: 'Cluster 3',
                value: 180,
              },
              {
                name: 'Cluster 4',
                value: 260,
              },
              {
                name: 'Cluster 5',
                value: 60,
              },
            ]}
          />
        </div>
      </div>
      <div>
        <a
          href=' https://github.com/PaulieScanlon/css-conic-gradient-donut-chart'
          target='_blank'
          rel='noopener'
          className='inline-flex gap-2 items-center text-xs text-gray-300 hover:text-gray-400'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
            className='w-5 h-5'
            aria-label='GitHub Logo'
          >
            <path
              d='M12.01,1.64c-5.83,0-10.55,4.75-10.55,10.63c0,4.7,3.02,8.67,7.21,10.08c0.52,0.11,0.72-0.23,0.72-0.51
		c0-0.25-0.02-1.09-0.02-1.97C6.44,20.5,5.83,18.6,5.83,18.6c-0.47-1.23-1.17-1.55-1.17-1.55C3.7,16.4,4.73,16.4,4.73,16.4
		c1.07,0.07,1.62,1.09,1.62,1.09c0.94,1.62,2.46,1.16,3.07,0.88c0.09-0.69,0.37-1.16,0.66-1.42c-2.34-0.25-4.8-1.16-4.8-5.24
		c0-1.16,0.42-2.11,1.08-2.85c-0.1-0.26-0.47-1.35,0.1-2.81c0,0,0.89-0.28,2.9,1.09c0.86-0.23,1.75-0.35,2.64-0.35
		c0.89,0,1.8,0.12,2.64,0.35c2.01-1.37,2.9-1.09,2.9-1.09c0.58,1.46,0.21,2.55,0.1,2.81c0.68,0.74,1.08,1.69,1.08,2.85
		c0,4.08-2.46,4.98-4.82,5.24c0.38,0.33,0.72,0.97,0.72,1.97c0,1.42-0.02,2.57-0.02,2.92c0,0.28,0.19,0.62,0.72,0.51
		c4.19-1.41,7.21-5.38,7.21-10.08C22.56,6.39,17.82,1.64,12.01,1.64z'
            />
          </svg>
          PaulieScanlon/css-conic-gradient-donut-chart
        </a>
      </div>
    </section>
  );
};

export default Page;
