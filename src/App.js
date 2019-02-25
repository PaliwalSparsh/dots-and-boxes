import React, { Component } from 'react';
import GameContainer from './containers/GameContainer';

class App extends Component {
	render() {
		return (
			<div style={{ height: '400px' }}>
				<GameContainer/>
			</div>
		);
	}
}

export default App;
