import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from 'pages/home/home';

const HomeConnected = Home; // This is babel bullshit!!

const render = () => {
	ReactDOM.render(<AppContainer>{HomeConnected}</AppContainer>, document.getElementById('container'));
};

if(module.hot) module.hot.accept('pages/home/home', render);
render();
