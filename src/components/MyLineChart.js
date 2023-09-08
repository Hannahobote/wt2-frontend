import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ReferenceLine, Line, LineChart } from 'recharts';


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
