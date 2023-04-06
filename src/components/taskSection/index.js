import { Box } from '@mui/material';
import React from 'react';
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';

const TaskSection = (context) => {
	const { state: { tasks }} = context;

	return (
		<Box className="taskSection">
			<label style={ {	marginBottom: '20px' } }>TASK</label>
			{tasks.map((task, key) =>
				<Box
					key={ key }
					className="task"
				>
					<AddTask { ...{ ...context, data: task } }/>
					<Box 	sx={ { flexBasis: '300px' } }>
						{task.name}</Box>
					<DeleteTask { ...{ ...context, data: task } }/>

				</Box>)}
		</Box>);
};

export default TaskSection;
