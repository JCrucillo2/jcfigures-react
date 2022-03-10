import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// react router
import { BrowserRouter } from "react-router-dom";

// global stylesheet
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
