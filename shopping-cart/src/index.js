import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Store from './Store'
import App from './components/App.js';

import './stylesheets/index.css';


const StoreInstance = Store()

ReactDOM.render( <Provider store={StoreInstance}>
						 <App />
					  </Provider>, document.getElementById('root'));

