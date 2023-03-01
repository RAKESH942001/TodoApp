/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { Button } from '@mui/material';
import todoManager from '../../services/todoManager';

const ClearAllButton = (context) => {
	const { setState } = context;

	return (
		todoManager.isCompleted(context)
		&& <Button
			onClick={ () => setState((state) => ({
				...state,
				todos: todoManager.removeCompletedTask(context),
			})) }
			variant="contained"
			color="error"
			size="small"
		   >ClearAll
			 </Button>);
};

export default ClearAllButton;
