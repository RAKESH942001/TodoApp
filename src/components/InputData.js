/* eslint-disable max-lines-per-function */
import { peek } from '@laufire/utils/debug';
import { Box, TextField } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';
import SelectAllCheckBox from './SelectAllCheckBox';

const onEnterKeyPress = (context) => {
	const { state: { isEdit }, setState } = context;

	return (
		isEdit
			? setState(() => todoManager.getEditedTodoList(context))
			: setState(() => todoManager.getAddedTodoList(context))
	);
};

const actionKeys = {
	Enter: (context) => onEnterKeyPress(context),
};

const InputData = (context) => {
	const { setState, state: { todo }} = context;

	return (
		<Box
			className="inputData"
		>
			{todoManager.isTodos(context)
				&& <SelectAllCheckBox { ...context }/>}
			<TextField
				variant="outlined"
				value={ todo.name }
				placeholder="To-Do :)"
				onChange={ ({ target: { value }}) => setState((state) => ({
					...state,
					todo: { ...todo, name: value },
				})) }
				onKeyUp={ ((evt) => peek(actionKeys[evt.code]
					&& actionKeys[evt.code](context))) }
			/>
		</Box>);
};

export default InputData;
