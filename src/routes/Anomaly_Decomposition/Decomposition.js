import React, { useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import data from './data';

const svgSquare = {
  shape: 'node',
  shapeProps: {
    x: -10,
    y: -10,
    height: 20,
    width: 50
  },
  fill: 'blue'
};

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

function NodeLabel(node) {
  const { nodeData } = node;
  // console.log("nodeLabel",nodeData)
  const hasChildren = nodeData.children;
  const btnStyle = {
    background: hasChildren ? '#00FFFF' : '',
    cursor: hasChildren ? 'pointer' : 'default'
  };
  return (
    <button className="btn" style={btnStyle}>
      {nodeData.name}
    </button>
  );
}

export default function DecompostionTree() {
  const [Orientation, setOrientation] = useState('horizontal');
  const [Siblings, setSiblings] = useState(1);
  const [NonSibilings] = useState(1);
  const treeContainer = useRef();
  const tree = useRef();
  // const data2=require("./data.json")
  //   const [dimensions, setDimensions] = useState({
  //     width: innerWidth,
  //     height: innerHeight
  //   });
  const [translate, setTranslate] = useState({ x: 100, y: 300 });

  //   useEffect(() => {
  //     if (treeContainer.current) {
  //       setDimensions(treeContainer.current.getBoundingClientRect());
  //     }
  //   }, [treeContainer]);

  // useEffect(() => {
  //   console.log(dimensions);
  //   setTranslate({
  //     x: dimensions.width / 2,
  //     y: dimensions.height / 2
  //   });
  // }, [dimensions]);

  // console.log("tree", tree);

  const onOrientationChange = () => {
    if (Orientation === 'horizontal') {
      setOrientation('vertical');
      setTranslate({ x: 600, y: 50 });

      setSiblings(2);
    } else {
      setOrientation('horizontal');
      setTranslate({ x: 100, y: 300 });
      setSiblings(1);
    }
  };

  return (
    <div className="App">
      <div id="treeWrapper" ref={treeContainer} style={{ width: innerWidth, height: innerHeight }}>
        {
          <button className="mt-3" onClick={onOrientationChange}>
            {Orientation === 'horizontal' ? 'Vertical' : 'Horizontal'}
          </button>
        }
        <Tree
          data={data}
          ref={tree}
          translate={translate}
          zoom={0.6}
          zoomable={false}
          nodeSvgShape={svgSquare}
          // rootNodeClassName="node__root"
          // branchNodeClassName="node__branch"
          // leafNodeClassName="node__leaf"
          // style={{width: "600px", height: "600px"}}
          // styles={{
          //   links: {
          //         stroke: 'red',
          //         strokeWidth: "2px",
          //       }}}

          pathFunc={'diagonal '}
          orientation={Orientation}
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
