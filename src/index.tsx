import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppWrapper from "./App";
import 'antd/dist/antd.css'

ReactDOM.render(<AppWrapper/>,document.getElementById('root')
);

serviceWorker.unregister();
