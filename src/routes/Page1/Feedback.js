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
    text: 'Max creation time'
  },
  {
    dataField: 'name',
    text: 'Min creation time'
  },
  {
    dataField: 'price',
    text: 'Min timestamp'
  },
  {
    dataField: 'id',
    text: 'Max timestamp'
  },
  {
    dataField: 'name',
    text: 'Event'
  },
  {
    dataField: 'price',
    text: 'Host'
  },
  {
    dataField: 'price',
    text: 'Subject'
  }
];

export default function Feedback() {
  return (
    <>
      {/* <h3>Feedback</h3> */}
      <div>
        <BootstrapTable bootstrap4 keyField="id" data={products} columns={columns} />
      </div>
    </>
  );
}
