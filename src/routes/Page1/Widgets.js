import React from 'react';
import { Card, Row, Col } from 'antd';
import SmallCards from './Component/SmallCards';
import AnomalyDistributionChart from './Component/AnomalyDistributionChart';
import DistributionHostType from './Component/DistributionHostType';
import MapView from './Component/MapView';

const Widgets = () => {
  return (
    <>
      <Row>
        <Col span={5}>
          <Card className="card-shadow card-border" bodyStyle={{ height: 100 }}>
            <SmallCards count="20M" content="Message" />
          </Card>
        </Col>
        <Col span={5}>
          <Card className="card-shadow card-border" bodyStyle={{ height: 100 }}>
            <SmallCards count="3241" content="Anomalies" />
          </Card>
        </Col>
        <Col span={5}>
          <Card className="card-shadow card-border" bodyStyle={{ height: 100 }}>
            <SmallCards count="162" content="Host Affected" />
          </Card>
        </Col>
        <Col span={5}>
          <Card className="card-shadow card-border" bodyStyle={{ height: 100 }}>
            <SmallCards count="2" content="Rare Events" />
          </Card>
        </Col>
        <Col span={4}>
          <div className="last-updated-content">
            <div>Last Updated</div>
            <div>Date and Time</div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <DistributionHostType title="Messsage Distribution by Host Type" />
        </Col>
        <Col span={14}>
          <MapView />
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Card className="card-shadow" title="Anomaly Distribution by Event">
            <AnomalyDistributionChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card className="card-shadow" title="Top 10 Hosts">
            <AnomalyDistributionChart />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Widgets;
