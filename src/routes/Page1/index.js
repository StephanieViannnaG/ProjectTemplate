import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Radio } from 'antd';
import { VendorSelect } from '../../appRedux/actions';
// import Content from './Content';
import Widgets from './Widgets';
import './styles.css';

const index = () => {
  const dispatch = useDispatch();
  const [value3, setValue3] = useState('Apple');

  useEffect(() => {
    dispatch(VendorSelect('Apple'));
  }, []);

  const options = [
    {
      label: 'Apple',
      value: 'Apple'
    },
    {
      label: 'Pear',
      value: 'Pear'
    },
    {
      label: 'Orange',
      value: 'Orange'
    }
  ];

  const onChange3 = ({ target: { value } }) => {
    setValue3(value);
    dispatch(VendorSelect(value));
  };

  return (
    <>
      <Row className="flex-dir-rev">
        <Radio.Group
          className="vendor-radio-button"
          options={options}
          onChange={onChange3}
          value={value3}
          optionType="button"
        />
      </Row>
      {/* <Row>
        <Col span={6}>Col Data 1</Col>
        <Col span={6}>Col Data 2</Col>
        <Col span={6}>Col Data 3</Col>
      </Row> */}
      {/* <Content /> */}
      {/* <Button>Test</Button> */}
      <Widgets />
    </>
  );
};

export default index;
