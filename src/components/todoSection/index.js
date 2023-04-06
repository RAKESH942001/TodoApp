import { Box } from '@mui/material';
import React from 'react';
import ActionButton from './ActionButton/ActionButton';
import ClearAllButton from './ClearAll';
import FilterButtons from './FilterButtons';
import TodoBoxes from './todoBoxes/TodoBoxes';
import TodoList from './TodoList/TodoList';

const TodoSection = (context) =>
	<Box className="todoSection">
		<Box className="todoHeader"><label>TODO</label></Box>
		<TodoBoxes { ...context }/>
		<ActionButton { ...context }/>
		<FilterButtons { ...context }/>
		<TodoList { ...context }/>
		<ClearAllButton { ...context }/>
	</Box>;

export default TodoSection;
