import React from 'react';

const shoutOutput = ( props ) => {

  const outputstyle = {
	textAlign: 'center',
  color: 'pink',
  fontSize: '100px',
  marginTop: '-30px',
  padding: '10px'
  };

  const divstyle = {
  display: 'inline-block',
  };
 
 return (
  <div style={divstyle}>
    <h1 style={outputstyle}>{props.shout}</h1>
  </div>

  );
};

export default shoutOutput;