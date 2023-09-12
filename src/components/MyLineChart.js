import React, { Component } from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, Line, LineChart } from 'recharts';

/**
 * Component for a linechart
 * 
 * @param {Number} width of line chart
 * @param {Number} height of line chart
 * @param {Object} data of what you want to incude in the line chart
 * @param {String} YAxisDataKey what data you want on the y-axis
 * @param {string} XAxisDataKey what data you want to show on the x-axis
 * @returns {Component}
 */
export default function MyLineChart({width, heigth, data, YAxisDataKey, XAxisDataKey}) {
  return (
    <div>
      <LineChart
        width={width}
        height={heigth}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={XAxisDataKey} />
        <YAxis dataKey={YAxisDataKey} />
        <Tooltip />
        <Line dataKey={YAxisDataKey} connectNulls type="monotone" stroke="#8884d8" fill="#8884d8" dot={true} />
      </LineChart>
    </div>
  )
}
