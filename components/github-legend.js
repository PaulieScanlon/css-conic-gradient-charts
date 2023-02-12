import React from 'react';
import PropTypes from 'prop-types';

const Legend = ({ data }) => {
  return (
    <div className='flex flex-col gap-8 grow'>
      <div className='flex flex-col'>
        <h2 className='m-0 text-white text-xl font-bold'>GitHub Chart</h2>
        <p className='m-0 text-xs text-gray-400  flex'>./components/github-chart.js</p>
      </div>
      <div>
        <ul className='list-none flex flex-col gap-2 m-0 p-0 text-gray-200'>
          {data.map((item, index) => {
            const { name, color, value } = item;

            return (
              <li key={index} className='list-none m-0 flex items-center justify-between'>
                <span className='flex items-center gap-2'>
                  <span className='block w-3 h-3 rounded-full' style={{ backgroundColor: color }} />
                  {name}
                </span>
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Legend.propTypes = {
  /** Shape of the data to drive the legend */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default Legend;
