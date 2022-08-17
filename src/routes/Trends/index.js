import React from 'react';
import { Card, Row, Col } from 'antd';
import { MessageOT, AnomalyOT, HostAffectedOT } from './Components';
import '../Trends/Components/global.css';
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
          <Card
            className="card-shadow"
            title={
              <div
                style={{
                  display: 'flex',
                  fontSize: '20px',
                  justifyContent: 'space-between',
                  flexDirection: 'row'
                }}>
                <p className="card-title">Anomaly Over Time</p>

                <div>
                  <i className="fal fa-thumbtack pin"></i>
                  <i className="fal fa-copy pin"></i>
                  <i className="fal fa-filter pin" />
                  <i className="fal fa-external-link-alt pin"></i>
                  <i className="fal fa-ellipsis-h pin"></i>
                </div>
              </div>
            }>
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
