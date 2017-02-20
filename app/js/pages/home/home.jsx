/**
*	Home Page
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
'use strict';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import Devtools from 'util/devtools';

import configureStore, { mapStateToProps, mapDispatchToProps } from 'store/home';
import 'css/main.css';

export class Home extends Component {

	render() {
		return (<div className = "hello">
			Webpack 2!
			<p>{this.props.message}</p>
			<Devtools />
		</div>);
	}

	static connect() {
		return (<Provider store = {configureStore()}>
			{React.createElement(connect(mapStateToProps, mapDispatchToProps)(this))}
		</Provider>);
	}

	static bootstrap() {
		return ReactDOM.render(this.connect(), document.getElementById('container'));
	}

}

export default Home.connect();
