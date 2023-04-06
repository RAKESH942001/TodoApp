import { DeleteRounded } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';
import todoManager from '../../../services/todoManager';

const DeleteButton = (context) => {
	const { setState } = context;

	return <Box>
		<Button
			className="deleteButton"
			onClick={ () => setState((state) => ({
				...state,
				todos: todoManager.removeTodo(context),
			})) }
			variant="contained"
			color="error"
			size="small"
		>
			<DeleteRounded/> </Button></Box>;
};

export default DeleteButton;
