import { React, useState } from 'react';
import './App.scss';
import TodoSection from './components/todoSection';
import TaskSection from './components/taskSection';
import todoManager from './services/todoManager';

const App = (context) => {
	const { seed, once } = context;
	const [state, setState] = useState(seed);
	const extendedContext = { ...context, state, setState };

	once(() => todoManager.autoGenTodo(extendedContext));
	return <div className="App">
		<TodoSection { ...extendedContext }/>
		<TaskSection { ...extendedContext }/>
	</div>;
};

export default App;
