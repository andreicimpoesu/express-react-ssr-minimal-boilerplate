import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/app";

const app = express();

app.use('/', express.static(path.join(__dirname + '/')));

function handleRender(req, res) {
    const reactHtml = ReactDOMServer.renderToString(<App />);
    const htmlTemplate = `<!DOCTYPE html>
        <html>
            <head>
                <title>Universal React server bundle</title>
            </head>
            <body>
                <div id="app">${reactHtml}</div>
                <script src="./client.js"></script>
            </body>
        </html>
    `;
    res.send(htmlTemplate);
}

app.get("*", handleRender);
app.listen(3000);
console.log("App is running on http://localhost:3000");
