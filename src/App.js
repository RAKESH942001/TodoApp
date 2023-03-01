import { React, useState } from 'react';
import './App.scss';
import TodoSection from './components/todoSection';

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
		<TodoSection { ...extendedContext }/>
	</div>;
};

export default App;
