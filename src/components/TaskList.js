import { Box } from '@mui/material';
import React from 'react';
import DeleteButton from './DeleteButton';
import CheckBox from './CheckBox';
import todoManager from '../services/todoManager';

const TaskList = (context) => {
	const { state: { filter, isEdit }, setState } = context;

	return todoManager.getFilteredTask[filter](context).map((todo, key) =>
		<Box
			key={ key }
			sx={ { display: 'flex',
				justifyContent: 'center' } }
		>
			<CheckBox { ...{ ...context, data: todo } }/>
			<Box
				sx={ { flexBasis: '300px' } }
				onClick={ () => setState((state) => ({
					...state,
					isEdit: !isEdit,
					todo: todo,
				})) }
			>{todo.name}</Box>
			<DeleteButton { ...{ ...context, data: todo } }/>
		</Box>);
};

export default TaskList;
