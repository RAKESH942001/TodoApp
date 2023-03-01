import { React, useState } from 'react';
import './App.scss';
import TodoSection from './components/todoSection';

const App = (context) => {
	const { seed } = context;
	const [state, setState] = useState(seed);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<TodoSection { ...extendedContext }/>
	</div>;
};

export default App;
