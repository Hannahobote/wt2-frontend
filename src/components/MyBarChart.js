import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

/**
 * 
 * @param {Number} width of bar chart
 * @param {Number} height of bar chart
 * @param {Object} data of what you want to incude in the line chart
 * @param {String} YAxisDataKey what data you want on the y-axis
 * @param {string} XAxisDataKey what data you want to show on the x-axis
 * @param {domain} domain max and minimun number of the y-axis result
 * @returns 
 */
export default function MyBarChart({width, heigth, data, YAxisDataKey, XAxisDataKey, domain}) {
  return (
    <div>
      <BarChart
        width={width}
        height={heigth}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={XAxisDataKey} />
        <YAxis allowDecimals="true" dataKey={YAxisDataKey} domain={domain} />
        <Tooltip />
        <Legend />
        {/*<Bar dataKey={XAxisDataKey} fill="#8884d8" />*/}
        <Bar dataKey={YAxisDataKey} fill="#82ca9d" barSize={50}  />
      </BarChart>
    </div>
  )
}
