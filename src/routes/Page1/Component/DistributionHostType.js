import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const data1 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }
];
const data2 = [
  { name: 'Group D', value: 500 },
  { name: 'Group E', value: 700 },
  { name: 'Group F', value: 1000 }
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function DistributionHostType({ title }) {
  const [cardTitle, setCardTitle] = useState(title);
  const [data, setData] = useState(data1);

  // const renderLegend = (props) => {
  //   console.log('renderLegend', props);
  //   return (
  //     <div className="modal-legend-sub">
  //       <p>
  //         <i
  //           className="fas fa-circle"
  //           style={{
  //             color: props?.payload[0]?.color,
  //             fontSize: '10px',
  //             marginRight: '4px'
  //           }}></i>
  //         {props?.payload[0]?.value}
  //       </p>
  //       <p>
  //         <i
  //           className="fas fa-circle"
  //           style={{
  //             color: props?.payload[1]?.color,
  //             fontSize: '10px',
  //             marginRight: '4px'
  //           }}></i>
  //         {props?.payload[1]?.value}
  //       </p>
  //     </div>
  //   );
  // };

  const handleButtonClick = (value) => {
    setCardTitle(value);
    if (
      value === 'Anomaly Distribution by Host Type' ||
      value === 'Rare Event Distribution by Host Type'
    )
      setData(data2);
    else setData(data1);
  };

  return (
    <>
      <Card className="card-shadow" title={cardTitle}>
        <ResponsiveContainer width={200} height={200} className="piechart-float-rgt">
          <PieChart width={200} height={200}>
            <Pie
              labelLine={false}
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label={renderCustomizedLabel}
              // legend={renderLegend}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <div className="align-buttons">
          <Button onClick={() => handleButtonClick('Messsage Distribution by Host Type')}>
            Message
          </Button>
          <Button onClick={() => handleButtonClick('Anomaly Distribution by Host Type')}>
            Anomaly
          </Button>
          <Button onClick={() => handleButtonClick('Host Affected Distribution by Host Type')}>
            Host Affected
          </Button>
          <Button onClick={() => handleButtonClick('Rare Event Distribution by Host Type')}>
            Rare Event
          </Button>
        </div>
      </Card>
    </>
  );
}
