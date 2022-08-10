/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Card, Select, Row, Col, Button, Table, Popover, Modal, Tooltip, Input } from 'antd';
import {
  GetSubDirectory,
  // CreateQuickRunTask,
  CreateLongRunTask,
  GetFileandDir
} from '../../../appRedux/actions/Dashboard';
import {
  FolderOpenFilled,
  FilePdfOutlined,
  EllipsisOutlined,
  ArrowLeftOutlined,
  CaretRightFilled
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
// import FolderTree from 'react-folder-tree';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';
const { Option } = Select;

const Transims = () => {
  // eslint-disable-next-line no-unused-vars
  const [response, setresponse] = useState([]);
  const dispatch = useDispatch();
  const [filename, setfilename] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [backwardpath, setbackwardpath] = useState('');
  const [currpath, setcurrpath] = useState('');
  const [workflow, setworkflow] = useState('');

  // const [workflow, setworkflow] = useState([]);
  const filestruc = useSelector((state) => state.GetSubDirectory);
  const Filedirc = useSelector((state) => state.GetFileandDir?.data);
  let navStyle = useSelector(({ settings }) => settings.navStyle);

  const handleChange = (e) => {
    console.log(e);
    setfilename(e);
  };
  // const Ellipsis = ({ record }) => {
  //   const Content = () => (
  //     <div>
  //       <p className="cursor-pointer">Rename</p>
  //     </div>
  //   );
  //   return (
  //     <Tooltip title={'Click To Edit the Folder'}>
  //       <Popover placement="rightTop" content={<Content />} trigger="click">
  //         <EllipsisOutlined className="ellipsis-outlined" />
  //       </Popover>
  //     </Tooltip>
  //   );
  // };

  useEffect(() => {
    dispatch(GetSubDirectory());
    dispatch(GetFileandDir('TRANSIMS_Cloud/'));
  }, []);

  useEffect(() => {
    console.log(Filedirc, 'useef');
    if (Filedirc == undefined || !Filedirc.length > 0) {
      setbackwardpath(currpath);
    } else {
      setcurrpath(Filedirc[0]?.curPath);
      Filedirc[0]?.backwardPath === 'TRANSIMS_Cloud'
        ? setbackwardpath(`${Filedirc[0].backwardPath}/`)
        : setbackwardpath(Filedirc[0].backwardPath);
    }
  }, [Filedirc]);
  const onClick = (e) => {
    console.log(e, 'ji');

    e.curPath === 'TRANSIMS_Cloud/'
      ? dispatch(GetFileandDir(`TRANSIMS_Cloud${e.forwardPath}`))
      : dispatch(GetFileandDir(e.curPath + e.forwardPath));
  };
  const backPath = (e) => {
    console.log(backwardpath, 'hey');
    // if (currpath === 'TRANSIMS_Cloud') {
    //   dispatch(GetFileandDir(`${Filedirc[0].backwardPath}/`));
    // }

    dispatch(GetFileandDir(backwardpath));
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // // const

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      width: '100px', //width-!important
      align: 'left',
      render: (text, record, index) =>
        record.isDirectory == true ? (
          <div key={index} className="gx-mt-2 gx-ml-2" Name={text} id="tooltip-contract">
            <Row>
              <Col span={21}>
                <div style={{ display: 'flex' }} onClick={() => onClick(record)}>
                  <p className="cursor-pointer">
                    <FolderOpenFilled className="gx-mr-2 color-008768 icon_folsize" />
                  </p>
                  <p
                    className="cursor-pointer color-008768"
                    style={{ position: 'relative', top: '2px', width: '200px' }}>
                    {text}
                  </p>
                </div>
              </Col>
              {record.curPath === 'TRANSIMS_Cloud/WORKFLOWS' ? (
                <Col span={3}>
                  {console.log('hi')}
                  <span className="cursor-pointer color-008768">
                    <i
                      className="fas fa-external-link-alt drill_icon color-008768"
                      onClick={showModal}></i>
                  </span>
                </Col>
              ) : (
                ''
              )}
            </Row>
          </div>
        ) : (
          <div key={index} className="gx-mt-2 gx-ml-2" Name={text}>
            <Row>
              <Col span={21}>
                <span
                  //  onClick={() => onClick(record)}
                  className="cursor-pointer">
                  <FilePdfOutlined className="gx-mr-2 color-008768 icon_filsize" />
                  <p
                    style={{
                      display: 'inline',
                      position: 'relative',
                      top: '-2px'
                    }}
                    className="color-008768 cursor-pointer ">
                    {text}
                  </p>
                </span>
              </Col>
              {/* <Col span={3}>
                <span className="cursor-pointer">
                  <CaretRightFilled
                  //  record={record}
                  />
                </span>
              </Col> */}
            </Row>
          </div>
        )
    }
  ];

  const onselectfiles = (e) => {
    console.log(e);
    // setfilename(e);
  };

  const onsubmit = () => {
    // axios
    //   .get(
    //     `https://apiapp-ita.azurewebsites.net/api/Aecom/CreateQuickRunTask?selectedworkflow=${'W001_2020-Jan'}&client=${'testuser97'}&username=${'testuser97'}`
    //   )
    //   .then((response) => {
    //     // const data = response.data.split(' ');
    //     // setresponse([data[1], data[3]]);
    //     console.log(response);
    //   })
    //   .catch((err) => console.log(err));
    // console.log(response[0], response[1]);
    // longrun
    // axios
    //   .get(
    //     `https://apiapp-ita.azurewebsites.net/api/Aecom/CreateLongRunTask?selectedworkflow=${'W001_2020-Jan'}&client=${'testuserLR'}&username=${'testuserSR'}`
    //   )
    //   .then((response) => {
    //     // const data = response.data.split(' ');
    //     // setresponse([data[1], data[3]]);
    //     console.log('hi', response);
    //   })
    //   .catch((err) => console.log(err));
    // axios
    //   .get(
    //     `https://apiapp-ita.azurewebsites.net/api/Aecom/GetTaskState?JobId=Job-W001_2020-Jan-testuserLR-testuserSR&Task=Task-LongRun-testuserSR`
    //   )
    //   .then((res) => console.log(res, 'ji'))
    //   .catch((err) => console.log(err));
    // };
    // axios
    //   .get(
    //     `https://apiapp-ita.azurewebsites.net/api/Aecom/GetTaskState?JobId=Job-W001_2020-Jan-testuser77-testuser77&Task=Task-QuickRun-testuser77`
    //   )
    //   .then((res) => console.log(res, 'ji'))
    //   .catch((err) => console.log(err));
    // axios
    //   .get(`https://apiapp-ita.azurewebsites.net/API/Aecom/GetSubDirectory`)
    //   .then((response) => {
    //     // const data = response.data.split(' ');
    //     // setresponse([data[1], data[3]]);
    //     // setworkflow(response.data);
    //     console.log(response);
    //   })
    //   .catch((err) => console.log(err));
    // dispatch(CreateQuickRunTask(filename, 'testdataui2', 'testdataui2'));
    // dispatch(CreateLongRunTask('W001_2020-Jan', 'testdataui22', 'testdataui22'));
    console.log('submited');
  };
  // const
  return (
    <>
      <Row className="ant_row_m0">
        <Col span={18}>
          <div className="folderview_bg">
            <div style={{ marginLeft: '40px' }}>
              <div
                className="algin_start"
                style={{
                  marginLeft: '-30px',
                  fontSize: '16px',
                  marginTop: '12px'
                }}>
                <div>
                  {/* {backwardPathController ? ( */}
                  {/* <ArrowLeftOutlined className={'icon-color-disabled'} /> */}
                  {/* ) : ( */}
                  {/* <Tooltip title={'Click To Go Back'}> */}
                  <ArrowLeftOutlined onClick={backPath} className={'backward_icon'} />
                  {/* </Tooltip> */}
                </div>
              </div>
              {/* <Tree
                  onSelect={onselectfiles}
                  //   defaultExpandAll={false}
                  // defaultExpandedKeys={defaultExpandedKeys}
                  // motion={motion}
                  // style={{ border: '1px solid #000', maxHeight: '100px', marginLeft: '20px' }}

                  treeData={getTreeData()}></Tree> */}
              <div className="antd_table_file_design">
                <Table
                  className="antd_table"
                  dataSource={Filedirc}
                  columns={columns}
                  pagination={false}></Table>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} style={{ textAlign: 'right' }}></Col>
      </Row>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        <Row>
          <Col span={12} style={{ marginTop: '10px' }}>
            <p>Selected Workflow</p>
          </Col>
          <Col span={12}>
            <Input placeholder="W001_2020-Jan" />
          </Col>
          <Col span={12} style={{ marginTop: '20px' }}>
            <p>Name</p>
          </Col>
          <Col span={12}>
            <Input placeholder="User22" style={{ marginTop: '10px' }} />
          </Col>
          <Col span={12} style={{ marginTop: '20px' }}>
            <p>Description</p>
          </Col>
          <Col span={12}>
            <Input placeholder="rail routes" style={{ marginTop: '10px' }} />
          </Col>
          <Col span={19}></Col>
          <Col span={5} style={{ marginTop: '20px' }}>
            <Button className="submitButton" onClick={onsubmit}>
              Submit
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default Transims;
