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
    text: 'Creation Time'
  },
  {
    dataField: 'name',
    text: 'Host'
  },
  {
    dataField: 'price',
    text: 'ID'
  },
  {
    dataField: 'id',
    text: 'Port Status'
  },
  {
    dataField: 'name',
    text: 'empty'
  },
  {
    dataField: 'price',
    text: 'title'
  }
];

export default function ClarifyTicketDetails() {
  return (
    <>
      {/* <h3>Clarify Ticket Details</h3> */}
      <div>
        <BootstrapTable bootstrap4 keyField="id" data={products} columns={columns} />
      </div>
    </>
  );
}
