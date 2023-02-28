import { peek } from '@laufire/utils/debug';
import { React, useState } from 'react';
import './App.scss';
import AddOrEditButton from './components/AddOrEditButton';
import ClearAllButton from './components/ClearAll';
import InputData from './components/InputData';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

const getInitialState = () => ({
	todo: { name: '' },
	todos: [],
	filteredList: [],
	filter: 'all',
	isEdit: false,
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	peek(extendedContext.state);
	return <div className="App">
		<InputData { ...extendedContext }/>
		<AddOrEditButton { ...extendedContext }/>
		<FilterButtons { ...extendedContext }/>
		<TaskList { ...extendedContext }/>
		<ClearAllButton { ...extendedContext }/>
	</div>;
};

export default App;
