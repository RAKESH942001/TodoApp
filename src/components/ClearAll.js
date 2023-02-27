import React from 'react';
import { Button } from '@mui/material';
import todoManager from '../services/todoManager';

const ClearAllButton = (context) => {
	const { setState } = context;

	return (
		<Button
			onClick={ () => setState((state) => ({
				...state,
				todos: todoManager.removeClearedTask(context),
			})) }
			variant="contained"
			color="error"
			size="small"
		>ClearAll</Button>);
};

export default ClearAllButton;
