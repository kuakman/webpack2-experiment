/**
*	Home Store
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import Devtools from 'util/devtools';
import ThunkMiddleware from 'redux-thunk';

import home from 'reducers/home-reducer';

const enhancer = compose(applyMiddleware(ThunkMiddleware), Devtools.instrument());

export const mapStateToProps = (state) => state.toJS();
export const mapDispatchToProps = () => {
	return {
		load: (data) => dispatch(Actions.load(data))
	};
};

export default function configureStore(initialState) {
	const store = createStore(home, initialState, enhancer);
	
	if(module.hot) {
		module.hot.accept('reducers/home-reducer', () => store.replaceReducer(require('reducers/home-reducer')));
	}

	return store;
};
