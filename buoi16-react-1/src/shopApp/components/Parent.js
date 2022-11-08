import React from 'react';

export default function Parent(props) {
  return (
    <div>
      <h1>Parent</h1>
      {props.children}
      <h3>Dưới đây là children</h3>
    </div>
  );
}
