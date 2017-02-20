/**
*	Search Reducer
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
'use strict';

import { fromJS } from 'immutable';
import * as Actions from 'actions/search/search-actions';

const getInitialState = () => fromJS({
	component: 'search',
	message: 'Hi Search'
});

export default function search(state = getInitialState(), action) {
	const { type, data } = action;
	switch(type) {
		default:
			return state;
	}
};
