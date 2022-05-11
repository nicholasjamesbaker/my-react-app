import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function AppTwo(){
  return <h1>This is the Second App</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
  // React.createElement("h1", null, "Hello, World!"),
);


