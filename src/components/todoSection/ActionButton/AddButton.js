import { AddToQueueTwoTone } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';
import todoManager from '../../../services/todoManager';

const AddButton = (context) => {
	const { setState } = context;

	return (
		<Box className="add">
			<Button
				size="large"
				disabled={ !todoManager.isItemThere(context) }
				onClick={ () => setState(() =>
					todoManager.addTodo(context)) }
			><AddToQueueTwoTone/>
			</Button>
		</Box>
	);
};

export default AddButton;
