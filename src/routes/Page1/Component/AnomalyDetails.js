import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapTable from 'react-bootstrap-table-next';

export const productsGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
  }
  return items;
};

const products = productsGenerator(10);

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
    dataField: 'id',
    text: 'Count'
  },
  {
    dataField: 'name',
    text: 'Last&days'
  },
  {
    dataField: 'price',
    text: 'Pair'
  }
];

export default function AnomalyDetails() {
  return (
    <>
      <h3>Anomaly Details</h3>
      <div>
        <BootstrapTable bootstrap4 keyField="id" data={products} columns={columns} />
      </div>
    </>
  );
}
