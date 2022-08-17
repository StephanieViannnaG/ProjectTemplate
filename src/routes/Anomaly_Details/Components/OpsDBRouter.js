import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './Anomaly.css';
export const productsGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i, progress: 40 + i * 5 });
  }
  return items;
};

const products = productsGenerator(10);

const columns = [
  {
    dataField: 'id',
    text: 'Router'
  },
  {
    dataField: 'name',
    text: 'Type'
  },
  {
    dataField: 'progress',
    text: 'Pop',
    sort: true
  },
  {
    dataField: 'name',
    text: 'Software'
  },
  {
    dataField: 'price',
    text: 'Owner'
  },
  {
    dataField: 'name',
    text: 'Dob'
  },
  {
    dataField: 'name',
    text: 'Update Time'
  }
];

export default function OpsDBRouter() {
  return (
    <>
      <div className="mintableheight">
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
