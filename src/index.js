import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Router basename="/">
        <Route component={App} />
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
