import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapTable from 'react-bootstrap-table-next';

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
    text: 'Creation Time'
  },
  {
    dataField: 'name',
    text: 'Host'
  },
  {
    dataField: 'progress',
    text: 'IdNumber',
    sort: true
  },
  {
    dataField: 'name',
    text: 'Portal Status'
  },
  {
    dataField: 'price',
    text: 'Active Tickets'
  },
  {
    dataField: 'name',
    text: 'Title'
  }
];

export default function ClarifyTicketDetail() {
  return (
    <>
      <div className="minclarifyheight">
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
