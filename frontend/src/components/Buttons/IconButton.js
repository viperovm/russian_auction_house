import React, {useEffect, useState} from 'react';
import WhatsApp from "../icons/WhatsApp";

const IconButton = ({action, children}) => {

  return (
    <div onClick={action} className="icon_button">
      {children}
    </div>
  );
};

export default IconButton;