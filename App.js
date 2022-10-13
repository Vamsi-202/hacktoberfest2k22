/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from 'react';
import './App.css';
import RouteHandler from './routes/RouteHandler';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container">
      <RouteHandler />
      <ToastContainer />
    </div>
  );
}

export default App;