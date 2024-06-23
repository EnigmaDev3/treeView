
import React, { useState } from 'react';
import './App.css';
const NodeShow = ({ tree }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="center-container">
      <div onClick={() => setOpened(!opened)}>
        {tree.children && tree.children.length > 0 && (
          <span>{opened ? '▼' : '►'}</span>
        )}
        {tree.name}
      </div>

      {opened && tree.children && tree.children.length > 0 && (
        <div style={{ paddingLeft: 35 }}>
          {tree.children.map((child) => { 
             return <NodeShow tree={child} />
          })}
        </div>
      )}
    </div>
  );
};

export default NodeShow;
