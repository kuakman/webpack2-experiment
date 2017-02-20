/**
*	Dashboard Reducer
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
'use strict';

import { fromJS } from 'immutable';
import * as Actions from 'actions/dashboard-actions';

const getInitialState = () => fromJS({
	page: 'dashboard',
	message: 'Say Hello to my little dashboard'
});

const load = (state, message) => {
	return state.set('message', message);
};


export default function dashboard(state = getInitialState(), action) {
	const { type, data } = action;
	switch(type) {
		case Actions.LOAD:
			return load(state, data.message);
		default:
			return state;
	}
};
