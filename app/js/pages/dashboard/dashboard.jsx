/**
*	Dashboard Page
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
'use strict';

import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import Devtools from 'util/devtools';

import store, { mapStateToProps, mapDispatchToProps } from 'store/dashboard';
import 'css/main.css';

export default class Dashboard extends Component {

	render() {
		return <div className = "hello">
			Webpack 2!
			<p>{this.props.message}</p>
		</div>;
	}

	static inject() {
		const binded = connect(mapStateToProps, mapDispatchToProps)(this);
		return React.createElement(binded);
	}

	static bootstrap() {
		return (<Provider store = {store}>
			<div>
				{this.inject()}
				<Devtools />
			</div>
		</Provider>);
	}

}
