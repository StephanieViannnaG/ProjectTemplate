import React from 'react';
import { Card, Row, Col } from 'antd';
const Widgets = () => {
  //   const data = '111';
  //   const data1 = '222';
  return (
    <>
      <Row>
        <Col span={14}>
          <Row>
            <Col span={8}>
              <Card bodyStyle={{ height: 100 }}>111</Card>
            </Col>
            <Col span={8}>
              <Card bodyStyle={{ height: 100 }}>111</Card>
            </Col>
            <Col span={8}>
              <Card bodyStyle={{ height: 100 }}>111</Card>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Card bodyStyle={{ height: 100 }}>111</Card>
            </Col>
          </Row>
        </Col>
        <Col span={10}>
          <Col span={24}>
            <Card bodyStyle={{ height: 240 }}>111</Card>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col span={16}>
          <Card>123</Card>
        </Col>
        <Col span={8}>
          <Card>123</Card>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Card>234</Card>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Card>234</Card>
        </Col>
      </Row>
    </>
  );
};

export default Widgets;
