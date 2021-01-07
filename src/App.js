import React, { useState, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';

import './App.css';

export default function App() {
	const [alert, setAlert] = useState(null);

	//Alert
	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 3000);
	};

	return (
		<GithubState>
			<BrowserRouter>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<Fragment>
										<Search setAlert={showAlert} />
										<Users />
									</Fragment>
								)}
							/>

							<Route exact path='/about' component={About} />
							<Route exact path='/user/:login' component={User} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</GithubState>
	);
}
