import React, { Component } from 'react';
import GameContainer from './containers/GameContainer';
import './App.global.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<GameContainer />
			</div>
		);
	}
}

export default App;
