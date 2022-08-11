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
              <Card className="card-shadow" bodyStyle={{ height: 200 }}>
                <Message />
              </Card>
            </Col>
            <Col span={8}>
              <Card className="card-shadow" bodyStyle={{ height: 200 }}>
                <Anomalies />
              </Card>
            </Col>
            <Col span={8}>
              <Card className="card-shadow" bodyStyle={{ height: 200 }}>
                <HostAffected />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Card className="card-shadow" bodyStyle={{ height: 355 }}>
                <AnomaliesOvertime />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={10}>
          <Col span={24}>
            <Card
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
          <Card className="card-shadow">
            <AnomalyDetails />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-shadow">
            <AnomaliesEventtype />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Card className="card-shadow">
            <ClarifyTicketDetails />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Card className="card-shadow">
            <Feedback />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Widgets;
