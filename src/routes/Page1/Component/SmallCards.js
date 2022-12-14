import * as React from 'react';
// import { LineChart, Line, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 9000,
//     amt: 2400
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 5008,
//     amt: 2210
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   }
// ];

export default function SmallCards({ count, content }) {
  return (
    <>
      <div className="widget-content">
        <div className="count-style">{count}</div>
        <div>{content}</div>
      </div>
      {/* <ResponsiveContainer width={'100%'} height={'70%'}>
        <LineChart width={200} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer> */}
    </>
  );
}
