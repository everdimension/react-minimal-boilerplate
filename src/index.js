import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({ name }) {
  return (
    <p>App is working. Hi, {name}</p>
  );
}

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('app')
);
