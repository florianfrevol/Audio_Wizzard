import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopNav from './TopNav';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Div_center from './div_center';
import { UserProvider } from './UserContext';

ReactDOM.render(
<UserProvider>
    <TopNav></TopNav>
    <Div_center />
</UserProvider>
,document.getElementById('div_center'));
serviceWorker.unregister();
