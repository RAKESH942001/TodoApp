import React from 'react';
import DeleteButton from './DeleteButton';

const TaskList = (context) => {
	const { state: { tasks, isEdit }, setState } = context;

	return tasks.map((task, key) =>
		<div
			key={ key }
			onClick={ () => setState((state) => ({
				...state,
				isEdit: !isEdit,
				inputData: task,
			})) }
		>
			<DeleteButton { ...{ ...context, data: task } }/>
			{(task.name)}
		</div>);
};

export default TaskList;
