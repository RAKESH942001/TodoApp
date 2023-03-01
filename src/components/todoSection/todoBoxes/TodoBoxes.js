import { Box } from '@mui/material';
import React from 'react';
import todoManager from '../../../services/todoManager';
import SelectAllCheckBox from './SelectAllCheckBox';
import TodoInput from './TodoInput';

const TodoBoxes = (context) =>
	<Box	className="inputData">
		{todoManager.isTodos(context)
				&& <SelectAllCheckBox { ...context }/>}
		<TodoInput { ...context }/>
	</Box>;

export default TodoBoxes;
