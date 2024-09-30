import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import TaskManager from '../routes/home';
import Profile from '../routes/profile';
import Login from '../routes/login';

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<TaskManager path="/" />
				<Profile path="/profile/" user="me" />
				<Login path="/login/"  />
				<Profile path="/profile/:user" />
			</Router>
		</main>
	</div>
);

export default App;
