import { Card } from 'antd';
import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

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
      {/* <h3>Anamolies by Host Type</h3> */}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {data2.map((item) => {
          return (
            <>
              <Card
                style={{
                  height: '100px',
                  width: '180px',
                  justifyContent: 'center'
                }}>
                <div style={{ marginBottom: '20px' }}>
                  <h2>{item.percentage}</h2>
                  <h3>{item.text}</h3>
                </div>
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
            left: 70,
            bottom: 50
          }}>
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
