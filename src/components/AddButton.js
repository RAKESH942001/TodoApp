import { peek } from '@laufire/utils/debug';
import { Button } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';

const AddButton = (context) => {
	const { setState, state: { tasks, isEdit }} = context;

	return <div>
		<Button
			disabled={ peek(!todoManager.isItemThere(context)) }
			onClick={ () => setState((state) => ({
				...state,
				tasks: todoManager.addAndEditData(context),
			})) }
		>{isEdit ? 'Edit' : 'Add'}</Button></div>;
};

export default AddButton;
