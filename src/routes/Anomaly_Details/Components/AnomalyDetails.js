import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { Progress } from 'antd';

export const productsGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i, progress: 40 + i * 5 });
  }
  return items;
};

const products = productsGenerator(10);

const progressFormatter = (values, row) => {
  let newData = products.filter((item) => item.name === row.name);
  if (newData[0].progress) {
    return (
      <div>
        <Progress percent={newData[0].progress} showInfo={false}>
          {newData[0].progress}
        </Progress>
      </div>
    );
  }
};

const columns = [
  {
    dataField: 'id',
    text: 'Host'
  },
  {
    dataField: 'name',
    text: 'Event'
  },
  {
    dataField: 'price',
    text: 'Subject'
  },
  {
    dataField: 'progress',
    text: 'Event Count(24Hrs)',
    formatter: progressFormatter
  },
  {
    dataField: 'name',
    text: 'Last 7Days Occurrence'
  },
  {
    dataField: 'price',
    text: 'Active Tickets'
  },
  {
    dataField: 'name',
    text: 'Closed Tickets'
  },
  {
    dataField: 'name',
    text: 'Positive Anomalies'
  },
  {
    dataField: 'name',
    text: 'Negative Anomalies'
  },
  {
    dataField: 'name',
    text: 'Rare Anomalies'
  },
  {
    dataField: 'name',
    text: 'Score'
  }
];

export default function AnomaliesDetail() {
  return (
    <>
      <div className="minanomalyheight">
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
          bordered={false}
        />
      </div>
    </>
  );
}
