import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

import LandingPage from './components/landingpage/LandingPage';

const App = () => {
	return (
		<div>
			<Router>
				<LandingPage />
			</Router>
		</div>
	);
};

export default App;
