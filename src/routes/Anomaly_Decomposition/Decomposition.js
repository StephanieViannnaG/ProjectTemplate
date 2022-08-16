import React, { useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import data from './data';
import './Decomposition.css';
import { Progress } from 'antd';

// const svgSquare = {
//   shape: 'circle',
//   shapeProps: {
//     x: -10,
//     y: -10,
//     height: 20,
//     width: 50
//   }
// };

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

function NodeLabel(node) {
  const { nodeData } = node;
  const hasChildren = nodeData.children;
  const btnStyle = {
    background: hasChildren ? 'aqua' : '00FFFF',
    cursor: hasChildren ? 'pointer' : 'default'
  };
  return (
    <>
      <Progress
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068'
        }}
        percent={99.9}
      />
      <button className="btn" style={btnStyle}>
        <h1>{nodeData.name}</h1>
      </button>
    </>
  );
}

export default function DecompostionTree() {
  const [Orientation] = useState('horizontal');
  const [Siblings] = useState(1);
  const [NonSibilings] = useState(1);
  const treeContainer = useRef();
  const tree = useRef();
  const [translate] = useState({ x: 100, y: 400 });

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
  const getDynamicPathClass = ({ target }) => {
    if (!target.children) {
      // Target node has no children -> this link leads to a leaf node.
      return 'node_path';
    }

    // Style it as a link connecting two branch nodes by default.
    return 'node_path';
  };

  return (
    <div className="App">
      <div id="treeWrapper" ref={treeContainer} style={{ width: innerWidth, height: innerHeight }}>
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
          zoomable={true}
          // nodeSvgShape={svgSquare}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          styles={{ width: innerWidth, height: innerHeight }}
          pathFunc={'diagonal'}
          enableLegacyTransitions
          orientation={Orientation}
          nodeSize={{ x: 350, y: 150 }}
          pathClassFunc={() => getDynamicPathClass}
          transitionDuration={800}
          allowForeignObjects
          separation={{ nonSiblings: NonSibilings, siblings: Siblings }}
          nodeLabelComponent={{
            render: <NodeLabel className="myLabelComponentInSvg" />,
            foreignObjectWrapper: {
              y: -10,
              x: -50
            }
          }}
        />
      </div>
    </div>
  );
}
