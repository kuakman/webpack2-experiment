import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Dashboard from 'pages/dashboard/dashboard';

const render = (Component) => {
	ReactDOM.render(<AppContainer>
		{Component.bootstrap()}
	</AppContainer>, document.getElementById('container'));
};

render(Dashboard);

if(module.hot) {
	module.hot.accept('pages/dashboard/dashboard', () => {
		render(Dashboard);
	});
}
