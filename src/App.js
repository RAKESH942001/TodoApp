import { React, useState } from 'react';
import './App.scss';
import AddOrEditButton from './components/AddOrEditButton';
import ClearAllButton from './components/ClearAll';
import InputData from './components/InputData';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

const getInitialState = () => ({
	todo: { name: '' },
	todos: [],
	filter: 'all',
	isEdit: false,
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<InputData { ...extendedContext }/>
		<AddOrEditButton { ...extendedContext }/>
		<FilterButtons { ...extendedContext }/>
		<TodoList { ...extendedContext }/>
		<ClearAllButton { ...extendedContext }/>
	</div>;
};

export default App;
