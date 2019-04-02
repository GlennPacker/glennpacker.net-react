import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/main/index';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

ReactDOM.render(
	<ReduxProvider store={store}>
		<Router>
			<App />
		</Router>
	</ReduxProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
