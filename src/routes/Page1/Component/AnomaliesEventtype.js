import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }
];

export default function AnomaliesEventtype() {
  return (
    <>
      <h3>Anomalies by event Type</h3>
      <div style={{ width: '100%', height: 290 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <h4>Linkdown</h4>
      <h4>Digital diagnostic Monitor Failure</h4>
      <h4>Others</h4>
    </>
  );
}
