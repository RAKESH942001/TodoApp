/* eslint-disable max-lines-per-function */
import { peek } from '@laufire/utils/debug';
import { Box, Checkbox } from '@mui/material';
import React from 'react';
import DeleteButton from './DeleteButton';

const TaskList = (context) => {
	const { state: { todos, isEdit }, setState } = context;

	return todos.map((todo, key) =>
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
					todo: peek(todo),
				})) }
			>{todo.name }</Box>
			<DeleteButton { ...{ ...context, data: todo } }/>
		</Box>);
};

export default TaskList;
