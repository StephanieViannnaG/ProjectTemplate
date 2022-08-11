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
      {/* <h3>Anomalies by event Type</h3> */}
      <div style={{ width: '100%', height: 310 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul>
        <li>
          <h5>Linkdown</h5>
        </li>
        <li>
          <h5>Digital diagnostic Monitor Failure</h5>
        </li>
        <li>
          <h5>Others</h5>
        </li>
      </ul>
    </>
  );
}
