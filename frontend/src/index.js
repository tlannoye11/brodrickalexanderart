import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

import './bootstrap.min.css';
import './css/index.css';
import './css/Hero.css';
import './css/ProductCarousel.css';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
