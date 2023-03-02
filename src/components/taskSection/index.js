import { Box } from '@mui/material';
import React from 'react';
import AddButton from '../todoSection/ActionButton/AddButton';
import DeleteButton from '../todoSection/TodoList/DeleteButton';

const TaskSection = (context) => {
	const { config: { tasks }} = context;

	return (
		<Box className="taskSection">
			{tasks.map((task, key) =>
				<Box
					key={ key }
					sx={ { display: 'flex',
						justifyContent: 'center' } }

				>
					<AddButton { ...context }/>
					<Box 	sx={ { flexBasis: '300px' } }>
						{task.name}</Box>
					<DeleteButton { ...context }/>

				</Box>)}
		</Box>);
};

export default TaskSection;
