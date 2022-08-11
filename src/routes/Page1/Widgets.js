import React from 'react';
import { Card, Row, Col } from 'antd';
import AnomaliesOvertime from './Component/AnomaliesOvertime';
import Message from './Component/Message';
import Anomalies from './Component/Anomalies';
import HostAffected from './Component/HostAffected';
import AnomaliesHost from './Component/AnomaliesHost';
import AnomalyDetails from './Component/AnomalyDetails';
import ClarifyTicketDetails from './Component/ClarifyTicketDetails';
import Feedback from './Feedback';
import AnomaliesEventtype from './Component/AnomaliesEventtype';
const Widgets = () => {
  //   const data = '111';
  //   const data1 = '222';
  return (
    <>
      <Row>
        <Col span={14}>
          <Row>
            <Col span={8}>
              <Card className="card-shadow" title={`Message 20M`} bodyStyle={{ height: 150 }}>
                <Message />
              </Card>
            </Col>
            <Col span={8}>
              <Card className="card-shadow" title={`Anamolies 1878`} bodyStyle={{ height: 150 }}>
                <Anomalies />
              </Card>
            </Col>
            <Col span={8}>
              <Card className="card-shadow" title={`Host Affected 89`} bodyStyle={{ height: 150 }}>
                <HostAffected />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Card className="card-shadow" bodyStyle={{ height: 355 }} title="Anamolies Over time">
                <AnomaliesOvertime />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={10}>
          <Col span={24}>
            <Card
              title="Anamolies by Host Type"
              className="card-shadow"
              bodyStyle={{
                height: 590,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
              <AnomaliesHost />
            </Card>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col span={16}>
          <Card className="card-shadow" title="Anomaly Details">
            <AnomalyDetails />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-shadow" title="Anomalies by event Type">
            <AnomaliesEventtype />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Card className="card-shadow" title="Clarify Ticket Details">
            <ClarifyTicketDetails />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Card className="card-shadow" title="Feedback">
            <Feedback />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Widgets;
