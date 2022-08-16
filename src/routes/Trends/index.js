import React from 'react';
import { Card, Row, Col } from 'antd';
import { MessageOT, AnomalyOT, HostAffectedOT } from './Components';
const Trends = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Card className="card-shadow" title={`Message Over Time`}>
            <MessageOT />
          </Card>
        </Col>
        <Col span={24}>
          <Card className="card-shadow" title={`Anomaly Over Time`}>
            <AnomalyOT />
          </Card>
        </Col>
        <Col span={24}>
          <Card className="card-shadow" title={`Host Affected Over Time`}>
            <HostAffectedOT />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Trends;
