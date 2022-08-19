import React from 'react';
import { AnomaliesDetail, ClarifyTicketDetail, OpsDBCircuit, OpsDBRouter } from './Components';
import { Card, Row, Col } from 'antd';
import '../Anomaly_Details/Components/Anomaly.css';
const AnomalyDetails = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Card className="card-shadow" title={`Anomaly Detail`}>
            <AnomaliesDetail />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card className="card-shadow" title={`ClarifyTicketDetail`}>
            <ClarifyTicketDetail />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card className="card-shadow">
            <Card className="card-shadow">
              <p className="card-title">Ops DB Router Details</p>
              <OpsDBRouter />
            </Card>
            <Card className="card-shadow">
              <div
                style={{
                  display: 'flex',
                  fontSize: '20px',
                  justifyContent: 'space-between',
                  flexDirection: 'row'
                }}>
                <div>
                  <p className="card-title">Ops DB Circuit Details</p>
                </div>
                <div>
                  <i className="fal fa-thumbtack pin"></i>
                  <i className="fal fa-copy pin"></i>
                  <i className="fal fa-filter pin" />
                  <i className="fal fa-external-link-alt pin"></i>
                  <i className="fal fa-ellipsis-h pin"></i>
                </div>
              </div>
              <OpsDBCircuit />
            </Card>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AnomalyDetails;
