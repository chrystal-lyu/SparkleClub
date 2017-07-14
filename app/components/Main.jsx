import React from 'react';

import Navigation from 'Navigation';

var Main = (props) => {
  return (
    <div>
      <Navigation/>
        <div className="row">
          <div className="column">
            {props.children}
          </div>
        </div>
    </div>
  )
};

export default Main;
