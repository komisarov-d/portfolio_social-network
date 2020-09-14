import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import {Provider} from "react-redux";
import {store} from "./redux/rootReducer";
import {BrowserRouter} from "react-router-dom";
import AppFC from "./App";

const app = (
        <Provider store={store}>
            <BrowserRouter>
                <AppFC/>
            </BrowserRouter>
        </Provider>
)

ReactDOM.render(app,document.getElementById('root')
);

serviceWorker.unregister();
