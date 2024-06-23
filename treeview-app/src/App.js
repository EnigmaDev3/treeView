import React from 'react';
import treeData from './tree.json';
import NodeShow from './NodeShow';

const App = () => {
  return (
    <div>
      <NodeShow tree={treeData} />
    </div>
  );
};

export default App;


