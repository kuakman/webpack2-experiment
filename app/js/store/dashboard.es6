/**
*	Dashboard Store
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';

import dashboard from 'reducers/dashboard-reducer';
import * as Actions from 'actions/dashboard-actions';

export const mapStateToProps = (state) => state.toJS();
export const mapDispatchToProps = () => {
	return {
		load: (data) => dispatch(Actions.load(data))
	};
};
export default createStore(dashboard, applyMiddleware(ThunkMiddleware));
