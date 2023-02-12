import React from 'react';
import PropTypes from 'prop-types';

const Chart = ({ data }) => {
  const total_value = data.reduce((a, b) => a + b.value, 0);
  const percent = (num) => Math.round((num / total_value) * 100);
  const degrees = (percent) => Math.round((percent / 100) * 360);

  const css_string = data
    .reduce((items, item, index, array) => {
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
    }, [])
    .map((chart, index) => {
      const { start_degrees, end_degrees } = chart;
      return ` var(--color-violet-${(index + 1) * 100}) ${start_degrees}deg ${end_degrees}deg`;
    })
    .join();

  return (
    <div className='flex flex-col gap-8 grow'>
      <div className='flex flex-col grow'>
        <h2 className='m-0 text-white text-xl font-bold'>Donut Chart 3</h2>
        <a
          href='https://github.com/PaulieScanlon/css-conic-gradient-charts/blob/main/components/donut-3.js'
          target='_blank'
          rel='noopener'
          className='m-0 text-xs text-gray-400 flex hover:text-violet-300'
        >
          ./components/donut-3.js
        </a>
      </div>
      <div>
        <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' className='rounded-full'>
          <foreignObject x='0' y='0' width='100' height='100'>
            <div
              xmlns='http://www.w3.org/1999/xhtml'
              className='w-full h-full'
              style={{
                background: `conic-gradient(${css_string})`,
              }}
            />
          </foreignObject>
          <circle cx='50' cy='50' r='32' className='fill-gray-800' />
        </svg>
      </div>
    </div>
  );
};

Chart.propTypes = {
  /** Shape of the data to drive the chart */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default Chart;
