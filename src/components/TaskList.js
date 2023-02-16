import React from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const TaskList = (context) => {
	const { state: { tasks }} = context;

	return tasks.map((task, key) =>
		<div key={ key }>
			<DeleteButton { ...{ ...context, data: task } }/>
			<EditButton { ...{ ...context, data: task } }/>
			{(task.name)}
		</div>);
};

export default TaskList;
