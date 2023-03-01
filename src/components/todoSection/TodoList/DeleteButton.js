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
				todos: todoManager.removeData(context),
			})) }
			variant="contained"
			color="error"
			size="small"
		>
			X</Button></Box>;
};

export default DeleteButton;
