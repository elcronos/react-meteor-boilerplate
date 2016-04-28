import React from 'react';

export default AppLayout = ({content}) => (
  <div className="app-root">
    <div className="container">
      {content()}
    </div>
  </div>
);
