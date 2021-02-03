import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/Store";



    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store} >
                    <App  />
                </Provider>
                </BrowserRouter>
        </React.StrictMode>,

        document.getElementById('root')
    );



