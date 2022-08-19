import React, { useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import data from './data';
import './Decomposition.css';
import { Progress, Popover } from 'antd';

const svgSquare = {
  shape: 'none',
  shapeProps: {
    width: '10%',
    height: 48,
    x: 0,
    y: -20,
    fill: '#BBDEFF'
  }
};

const content = (props) => {
  console.log('content', props);
  return (
    <>
      Percentage is {props.percentage}
      <br />
      {props.parent ? <>Children of {props.parent.name}</> : null}
    </>
  );
};

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

function NodeLabel(node) {
  const { nodeData } = node;
  // const hasChildren = nodeData.children;
  const btnStyle = {
    // background: hasChildren ? '#BBDEFF' : '#C0C0C0',
    border: 0,
    cursor: 'pointer',
    height: '50px',
    paddingTop: '5px'
  };
  return (
    <Popover content={() => content(nodeData)} title={nodeData.name}>
      <Progress
        strokeColor={'#118DFF'}
        percent={nodeData.percentage}
        showInfo={false}
        strokeLinecap="square"
      />
      <div className="btn" style={btnStyle}>
        <h1>{nodeData.name}</h1>
        <h1>{nodeData.eventcount}</h1>
      </div>
    </Popover>
  );
}

export default function DecompostionTree() {
  const [Orientation] = useState('horizontal');
  const [Siblings] = useState(1.15);
  const [NonSibilings] = useState(1.5);
  const treeContainer = useRef();
  const tree = useRef();
  const [translate] = useState({ x: 100, y: 380 });

  // const onOrientationChange = () => {
  //   if (Orientation === 'horizontal') {
  //     setOrientation('vertical');
  //     setTranslate({ x: 800, y: 50 });

  //     setSiblings(2);
  //   } else {
  //     setOrientation('horizontal');
  //     setTranslate({ x: 100, y: 300 });
  //     setSiblings(1);
  //   }
  // };
  // const getDynamicPathClass = ({ target }) => {
  //   if (!target.children) {
  //     // Target node has no children -> this link leads to a leaf node.
  //     return 'node_path';
  //   }

  //   // Style it as a link connecting two branch nodes by default.
  //   return 'node_path';
  // };

  return (
    <div className="App">
      <div
        id="treeWrapper"
        ref={treeContainer}
        style={{ width: innerWidth, height: innerHeight, backgroundColor: '#E8E8E8' }}>
        {/* {
          <button className="mt-3" onClick={onOrientationChange}>
            {Orientation === 'horizontal' ? 'Vertical' : 'Horizontal'}
          </button>
        } */}
        <Tree
          data={data}
          ref={tree}
          translate={translate}
          zoom={0.6}
          zoomable={false}
          nodeSvgShape={svgSquare}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          styles={{ width: innerWidth, height: innerHeight }}
          pathFunc={'diagonal'}
          enableLegacyTransitions
          orientation={Orientation}
          nodeSize={{ x: 500, y: 150 }}
          // pathClassFunc={() => getDynamicPathClass}
          transitionDuration={800}
          separation={{ nonSiblings: NonSibilings, siblings: Siblings }}
          allowForeignObjects
          nodeLabelComponent={{
            render: <NodeLabel className="myLabelComponentInSvg" />,
            foreignObjectWrapper: {
              y: -15,
              x: 0
            }
          }}
        />
      </div>
    </div>
  );
}
