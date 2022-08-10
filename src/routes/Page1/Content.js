import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

const Content = () => {
  const vendorName = useSelector((state) => state.vendor);
  return (
    <Row>
      {vendorName === 'Apple' ? (
        <>
          <Col span={6}>Col Data 4</Col>
          <Col span={6}>Col Data 5</Col>
          <Col span={6}>Col Data 6</Col>
        </>
      ) : (
        <Col span={6}>Col Data 7</Col>
      )}
    </Row>
  );
};

export default Content;
