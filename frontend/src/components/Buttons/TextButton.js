import React from 'react';

const TextButton = ({text, action}) => {
  return (
    <div onClick={action} className="main_button">{text}</div>
  );
};

export default TextButton;