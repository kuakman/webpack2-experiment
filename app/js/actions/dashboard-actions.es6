/**
*	Dashboard Actions
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
'use strict';

export const LOAD = 'dashboard:load';

export function load(data) {
	return dispatch => { dispatch({ type: LOAD, data }); };
};
