/**
*	Header Reducer
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
'use strict';

import { combineReducers } from 'redux';
import { fromJS } from 'immutable';

import * as Actions from 'actions/search/header-actions';

import search from 'reducers/search/search-reducer';

const getInitialState = () => fromJS({
	component: 'header',
	message: 'Hi Header'
});

const header = (state = getInitialState(), action) => {
	const { type, data } = action;
	switch(type) {
		default:
			return state;
	}
};

export default combineReducers({ header, search });
