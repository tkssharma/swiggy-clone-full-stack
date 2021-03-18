import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/hoc/UserContext/UserContext';
import store from './redux/store';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<UserProvider>
				<App />
			</UserProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
