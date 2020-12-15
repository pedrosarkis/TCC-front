import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index";
import GlobalStyle from "./styles/global";

import { types, transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
    const options = {
        // you can also just use 'bottom center'
        position: positions.BOTTOM_RIGHT,
        timeout: 5000,
        offset: "10px",
        type: types.INFO,
        // you can also just use 'scale'
        transition: transitions.SCALE,
    };

    return (
        <>
            <AlertProvider template={AlertTemplate} {...options}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
                <GlobalStyle />
            </AlertProvider>
        </>
    );
}

export default App;
