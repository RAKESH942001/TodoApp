import { React, useState } from 'react';
import './App.scss';
import TodoSection from './components/todoSection';
import TaskSection from './components/taskSection';

const App = (context) => {
	const { seed } = context;
	const [state, setState] = useState(seed);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<TodoSection { ...extendedContext }/>
		<TaskSection { ...extendedContext }/>
	</div>;
};

export default App;
