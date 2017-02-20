/**
*	Home Reducer
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
'use strict';

import { fromJS } from 'immutable';
import * as Actions from 'actions/home-actions';

const getInitialState = () => fromJS({
	page: 'home',
	message: 'Hello Reducer'
});

const load = (state, message) => {
	return state.set('message', message);
};

export default function home(state = getInitialState(), action) {
	const { type, data } = action;
	switch(type) {
		case Actions.LOAD:
			return load(state, data.message);
		default:
			return state;
	}
};
