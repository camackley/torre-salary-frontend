import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import App from './pages/App.jsx'
import './index.css'

const container = document.getElementById("app");
ReactDOM.render(<App/>, container);