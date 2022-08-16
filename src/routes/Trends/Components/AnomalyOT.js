import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const AnomalyOT = () => {
  // Sample data
  const data = [
    { name: 'A', x: 861 },
    { name: 'B', x: 862 },
    { name: 'C', x: 343 },
    { name: 'D', x: 454 },
    { name: 'E', x: 435 },
    { name: 'F', x: 653 },
    { name: 'G', x: 734 },
    { name: 'H', x: 845 },
    { name: 'I', x: 932 },
    { name: 'J', x: 133 },
    { name: 'K', x: 222 },
    { name: 'L', x: 332 },
    { name: 'M', x: 554 },
    { name: 'N', x: 554 },
    { name: 'O', x: 633 },
    { name: 'P', x: 722 },
    { name: 'Q', x: 638 },
    { name: 'R', x: 229 },
    { name: 'S', x: 321 },
    { name: 'T', x: 222 },
    { name: 'U', x: 573 },
    { name: 'V', x: 464 },
    { name: 'W', x: 565 },
    { name: 'X', x: 656 },
    { name: 'Y', x: 764 },
    { name: 'Z', x: 348 }
  ];

  return (
    <ResponsiveContainer
      width="95%"
      height={250}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
      <BarChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="x" fill="#F5C4AF" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default AnomalyOT;
