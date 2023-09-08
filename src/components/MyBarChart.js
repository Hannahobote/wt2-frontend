import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default function MyBarChart({width, heigth, data, YAxisDataKey, XAxisDataKey}) {
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
        <YAxis allowDecimals="true" dataKey={YAxisDataKey} domain={[7, 10]} />
        <Tooltip />
        <Legend />
        <Bar dataKey={XAxisDataKey} fill="#8884d8" />
        <Bar dataKey={YAxisDataKey} fill="#82ca9d" />
      </BarChart>
    </div>
  )
}
