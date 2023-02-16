import { React, useState } from 'react';
import './App.scss';
import InputData from './components/InputData';

const getInitialState = () => ({
	inputData: null,
	tasks: [],

});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<InputData { ...extendedContext }/>
	</div>;
};

export default App;
