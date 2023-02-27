import { peek } from '@laufire/utils/debug';
import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import ClearAllButton from './components/ClearAll';
import InputData from './components/InputData';
import TaskList from './components/TaskList';

const getInitialState = () => ({
	todo: { name: '' },
	todos: [],
	isEdit: false,
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	peek(extendedContext.state);
	return <div className="App">
		<InputData { ...extendedContext }/>
		<Buttons { ...extendedContext }/>
		<TaskList { ...extendedContext }/>
		<ClearAllButton { ...extendedContext }/>

	</div>;
};

export default App;
