import React from 'react';
import Transims from './Components/Transims';
import './Styles/Transims.css';
import { Row, Col, Card } from 'antd';
import Reactleaflet from '../Transims/Components/Reactleaflet';
const index = () => {
  return (
    <>
      <Row>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card
            title={
              <>
                <Row className="ant_row_m0">
                  <Col span={14}>
                    <p className="title-cards mt-1">Transims Cloud</p>
                  </Col>
                </Row>
              </>
            }
            className="cardbdbtm margin_align"
            bodyStyle={{ height: '250px' }}>
            <Row>
              <Col span={12}>
                <Transims />
              </Col>
              <Col span={12}>
                <Reactleaflet />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default index;
