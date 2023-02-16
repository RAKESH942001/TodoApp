import React from 'react';

const TaskList = (context) => {
	const { state: { tasks }} = context;

	return tasks.map((task, key) =>
		<div key={ key }>
			{task.name}
		</div>);
};

export default TaskList;
