import { Box, Checkbox } from '@mui/material';
import React from 'react';
import DeleteButton from './DeleteButton';

const TaskList = (context) => {
	const { state: { tasks, isEdit }, setState } = context;

	return tasks.map((task, key) =>
		<Box
			key={ key }
			sx={ { display: 'flex',
				justifyContent: 'center' } }
		>
			<Checkbox/>
			<Box
				sx={ { flexBasis: '300px' } }
				onClick={ () => setState((state) => ({
					...state,
					isEdit: !isEdit,
					inputData: task,
				})) }
			>{task.name }</Box>
			<DeleteButton { ...{ ...context, data: task } }/>
		</Box>);
};

export default TaskList;
