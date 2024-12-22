import React from 'react';

const DemoName = (props) => {

  const style = {color:props.color};

  return(
    <div>
      <h1 style={style}>{props.name}</h1>
      <h4>{props.title}</h4>
    </div>

  );

}

export default DemoName;