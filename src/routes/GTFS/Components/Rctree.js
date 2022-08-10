import React from 'react';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';

const defaultExpandedKeys = ['0', '0-1-14'];
const defaultSelectedKeys = ['0-1-14-1'];

// const motion = {
//   motionName: "node-motion",
//   motionAppear: false,
//   onAppearStart: () => ({ height: 0 }),
//   onAppearActive: (node) => ({ height: node.scrollHeight }),
//   onLeaveStart: (node) => ({ height: node.offsetHeight }),
//   onLeaveActive: () => ({ height: 0 }),
// };

const onExpand = (expandedKeys) => {
  console.log('onExpand', expandedKeys);
  // if not set autoExpandParent to false, if children expanded, parent can not collapse.
  // or, you can remove all expanded chilren keys.
};

// const onSelect = (selectedKeys, info) => {
//   console.log("onSelect", info.selectedNodes[0].title);
// };

function getTreeData() {
  return [
    {
      key: '0',
      title: 'MTA_GTFS',
      children: [
        {
          key: '0-1',
          title: 'MTA New York City  Transit',
          children: [
            {
              key: '0-1-14',
              title: 'M14A-SBS Lower East Side - Abingdon Sq',
              children: [
                {
                  key: '0-1-14-1',
                  title: 'SELECT BUS LES GRAND-FDR via 14 ST'
                },
                { key: '0-1-14-2', title: 'SELECT BUS UNION SQ via 14 ST' }
              ]
            }
          ]
        }
      ]
    }
  ];
}

const Rctree = ({ onSelect }) => {
  return (
    <div className="Tree">
      <Tree
        // defaultExpandAll={false}
        defaultExpandedKeys={defaultExpandedKeys}
        defaultSelectedKeys={defaultSelectedKeys}
        // motion={motion}
        style={{ marginTop: '50px', marginLeft: '50px' }}
        treeData={getTreeData()}
        onExpand={onExpand}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Rctree;
