import React from 'react';

import Donut1 from '../components/donut-1';
import Donut2 from '../components/donut-2';
import Donut3 from '../components/donut-3';
import Pie1 from '../components/pie-1';

const Page = () => {
  return (
    <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
      <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
        <Donut1
          data={[
            {
              name: 'Cluster 1',
              value: 210,
            },
            {
              name: 'Cluster 2',
              value: 30,
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
          ].sort((a, b) => a.value - b.value)}
        />
      </div>
      <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
        <Donut2
          data={[
            {
              name: 'Cluster 1',
              value: 210,
              color: 'var(--color-fuchsia-400)',
            },
            {
              name: 'Cluster 2',
              value: 30,
              color: 'var(--color-fuchsia-100)',
            },
            {
              name: 'Cluster 3',
              value: 180,
              color: 'var(--color-fuchsia-300)',
            },
            {
              name: 'Cluster 4',
              value: 260,
              color: 'var(--color-fuchsia-500)',
            },
            {
              name: 'Cluster 5',
              value: 60,
              color: 'var(--color-fuchsia-200)',
            },
          ].sort((a, b) => a.value - b.value)}
        />
      </div>
      <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
        <Donut3
          data={[
            {
              name: 'Cluster 1',
              value: 210,
            },
            {
              name: 'Cluster 2',
              value: 30,
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
          ].sort((a, b) => a.value - b.value)}
        />
      </div>
      <div className='flex bg-bubbles rounded border border-gray-700 p-4 md:p-8'>
        <Pie1
          data={[
            {
              name: 'Cluster 1',
              value: 210,
            },
            {
              name: 'Cluster 2',
              value: 30,
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
          ].sort((a, b) => a.value - b.value)}
        />
      </div>
    </div>
  );
};

export default Page;
