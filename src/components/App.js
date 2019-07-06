import React from 'react';
import { createGlobalStyle } from 'styled-components'

import Todo from "./Todo";

const GlobalStyle = createGlobalStyle`
  * {
		box-sizing: border-box;
	};
  
  body {
		font-family: 'Helvetica', 'Arial', sans-serif;
		font-size: 1em;
		padding: 0;
		margin: 0;
	};
`

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<Todo />
			</React.Fragment>
		);
	}
}

export default App;