import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../client/routes';
import App from "./app";

hydrate(
    <Router>
        <Routes />
    </Router>,
  document.getElementById("app")
);