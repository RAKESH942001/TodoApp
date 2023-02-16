import { React, useState } from 'react';
import './App.scss';
import AddButton from './components/AddButton';
import InputData from './components/InputData';
import TaskList from './components/TaskList';

const getInitialState = () => ({
	inputData: null,
	tasks: [
		{ name: null },
	],

});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<InputData { ...extendedContext }/>
		<AddButton { ...extendedContext }/>
		<TaskList { ...extendedContext }/>
	</div>;
};

export default App;
