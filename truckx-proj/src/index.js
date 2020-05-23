import React from 'react';
import ReactDOM from 'react-dom';
import { CustomerPage } from './components/CustomerPage';

ReactDOM.render(
  //React.createElement(HelloWorld),
  <>
    <CustomerPage />
  </>,
  document.querySelector('#root'),
);