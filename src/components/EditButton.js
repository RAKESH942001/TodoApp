import { Box, Button } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';

const EditButton = (context) => {
	const { setState } = context;

	return <Box>
		<Button
			className="editButton"
			onClick={ () => setState(() =>
				todoManager.getEditedTodoList(context)) }
		>Edit</Button>
	</Box>;
};

export default EditButton;
