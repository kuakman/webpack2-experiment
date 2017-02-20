/**
*	Home Actions
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
'use strict';

export const LOAD = 'home:load';

export function load(data) {
	return dispatch => { dispatch({ type: LOAD, data }); };
};
