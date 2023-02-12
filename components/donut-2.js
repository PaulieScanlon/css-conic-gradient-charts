import React from 'react';
import PropTypes from 'prop-types';

const Chart = ({ data }) => {
  const total_value = data.reduce((a, b) => a + b.value, 0);
  const convertToPercent = (num) => Math.round((num / total_value) * 100);
  const convertToDegrees = (num) => Math.round((num / 100) * 360);

  const css_string = data
    .reduce((items, item, index, array) => {
      items.push(item);

      item.count = item.count || 0;
      item.count += array[index - 1]?.count || 0;
      item.start_value = item.start_value || array[index - 1]?.count ? array[index - 1].count : 0;
      item.end_value = item.count += item.value;
      item.start_percent = convertToPercent(item.start_value);
      item.end_percent = convertToPercent(item.end_value);
      item.start_degrees = convertToDegrees(item.start_percent);
      item.end_degrees = convertToDegrees(item.end_percent);

      return items;
    }, [])
    .map((chart) => {
      const { color, start_degrees, end_degrees } = chart;
      return ` ${color} ${start_degrees}deg ${end_degrees}deg`;
    })
    .join();

  return (
    <div className='flex flex-col gap-8 grow'>
      <div className='flex flex-col grow'>
        <h2 className='m-0 text-white text-xl font-bold'>Donut Chart 2</h2>
        <a
          href='https://github.com/PaulieScanlon/css-conic-gradient-charts/blob/main/components/donut-2.js'
          target='_blank'
          rel='noopener'
          className='m-0 text-xs text-gray-400 flex hover:text-fuchsia-300'
        >
          ./components/donut-2.js
        </a>
      </div>
      <div>
        <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' className='w-full h-full rounded-full'>
          <clipPath id='ring'>
            <path d='M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 18 a 2 2 0 0 0 0 64 2 2 0 0 0 0 -64' />
          </clipPath>

          <foreignObject x='0' y='0' width='100' height='100' clipPath='url(#ring)'>
            <div
              xmlns='http://www.w3.org/1999/xhtml'
              className='w-full h-full'
              style={{
                background: `conic-gradient(${css_string})`,
              }}
            />
          </foreignObject>
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
