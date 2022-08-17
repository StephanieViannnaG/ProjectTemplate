import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapTable from 'react-bootstrap-table-next';
// import './Anomaly.css';
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
    text: 'Host'
  },
  {
    dataField: 'name',
    text: 'Subject'
  },
  {
    dataField: 'progress',
    text: 'Bandwidth kbps',
    sort: true
  },
  {
    dataField: 'name',
    text: 'Bps in Avg'
  },
  {
    dataField: 'price',
    text: 'Bps in Max'
  },
  {
    dataField: 'name',
    text: 'Bps in p95'
  },
  {
    dataField: 'id',
    text: 'Bps out Avg'
  },
  {
    dataField: 'name',
    text: 'Bps out Max'
  },
  {
    dataField: 'progress',
    text: 'Bps out p95',
    sort: true
  },
  {
    dataField: 'name',
    text: 'Speed'
  },
  {
    dataField: 'price',
    text: 'Metric'
  },
  {
    dataField: 'name',
    text: 'Vrf'
  }
];

export default function OpsDBCircuit() {
  return (
    <>
      <div className="maxtableheight">
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
//<i class="fal fa-thumbtack"></i>
//<i class="fal fa-copy"></i>
//<i className="fal fa-filter" />
//<i className="far fa-external-link-alt mr-3"></i>
//<i class="fal fa-ellipsis-h"></i>
