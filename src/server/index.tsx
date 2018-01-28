import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";

import App from "../client/app";
import Routes from '../client/routes';

const app = express();

app.use('/', express.static(path.join(__dirname + '/')));


function handleRender(req, res) {

    const context = {};
    const componentHTML = renderToString(
        <Router location={ req.url } context={ context }>
            <Routes />
        </Router>
    );

    const HTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>SSR test</title>
            </head>
            <body>
                <div id="app">${componentHTML}</div>
                <script type="application/javascript" src="./client.js"></script>
            </body>
        </html>
    `;

    res.send(HTML);
};

app.get("*", handleRender);
app.listen(3000);
console.log("App is running on http://localhost:3000");
