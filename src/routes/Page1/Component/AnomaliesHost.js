import { Card } from 'antd';
import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import '../Page1.css';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  }
];

const data2 = [
  {
    percentage: '10%',
    text: 'dsl-gw'
  },
  {
    percentage: '60%',
    text: 'dsl-gw'
  },
  {
    percentage: '25%',
    text: 'dsl-gw'
  },
  {
    percentage: '5%',
    text: 'dsl-gw'
  }
];
export default function AnomaliesHost() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <h3>Anamolies by Host Type</h3> */}
        {data2.map((item) => {
          return (
            <>
              <Card
                style={{
                  height: '85px',
                  width: '180px',
                  justifyContent: 'center',
                  marginLeft: '20px'
                }}
                className="card">
                <h3 style={{ padding: '0', margin: '0' }}>{item.percentage}</h3>
                <h5 style={{ padding: '0', margin: '0' }}>{item.text}</h5>
              </Card>
            </>
          );
        })}
      </div>
      <ResponsiveContainer width="70%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 80,
            right: 30,
            left: 10,
            bottom: 50
          }}>
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
