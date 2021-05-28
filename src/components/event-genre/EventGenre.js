import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, Pie, PieChart } from 'recharts';

export default function EventGenre(props) {
  const { events } = props
  const [ data, setData ] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS']

  const getData = () => {
    const data = genres.map( genre => {
      const value = events.filter( event => event.summary.split(' ').includes(genre)).length
      return { name: genre, value }
    })
    return data
  }

  useEffect(() => {
    setData(() => getData())
  }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          innerRadius={20}
          fill="#bbe1fa"
          stroke="#1b262c"
          dataKey="value"
        >
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
