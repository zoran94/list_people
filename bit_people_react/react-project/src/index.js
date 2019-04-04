import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { HashRouter } from "react-router-dom"
ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>

    , document.getElementById('root'));
=======
import {HashRouter} from "react-router-dom"

>>>>>>> 9eea0c82a5c2205048243d68a850979c0f0b9a9f

ReactDOM.render(
    <HashRouter>
    <App />
    </HashRouter>,
 document.getElementById('root'));

{/* <HashRouter>
<App />
</HashRouter>, */}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
