import { Box, Button } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';

const EditButton = (context) => {
	const { setState } = context;

	return <Box>
		<Button
			className="editButton"
			onClick={ () => setState((state) => ({
				...state,
				todos: todoManager.editFields(context),
				todo: { name: todoManager.resetInput() },
				isEdit: todoManager.toggleEdit(context),
			})) }
		>Edit</Button>
	</Box>;
};

export default EditButton;
