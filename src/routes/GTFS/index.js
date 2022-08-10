import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import { Rctree, MapViewSingleJson } from './Components';
const Index = () => {
  const [selectedInfo, setSelectedInfo] = useState('SELECT BUS LES GRAND-FDR via 14 ST');

  const onSelect = (selectedKeys, info) => {
    console.log('onSelect', info.selectedNodes[0].title);
    setSelectedInfo(info.selectedNodes[0].title);
  };

  return (
    <>
      <Card
        title={
          <Row className="ant_row_m0">
            <Col span={14}>
              <p className="title-cards mt-1">Gtfs</p>
            </Col>
          </Row>
        }>
        <Row>
          <Col span={12}>
            <Rctree onSelect={onSelect} />
          </Col>
          <Col span={12}>
            {/* <MapView /> */}
            <MapViewSingleJson selectedInfo={selectedInfo} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Index;
