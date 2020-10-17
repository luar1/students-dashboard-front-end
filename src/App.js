import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/Global';
import 'antd/dist/antd.css';

import LandingPage from './components/landingPage/LandingPage';

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<LandingPage />
		</Router>
	);
};

export default App;
