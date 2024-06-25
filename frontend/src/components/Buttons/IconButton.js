import React from 'react';

const IconButton = ({action, children}) => {

  return (
    <div onClick={action} className="icon_button">
      {children}
    </div>
  );
};

export default IconButton;