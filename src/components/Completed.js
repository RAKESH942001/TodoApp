import React from 'react';
import { Box, Button } from '@mui/material';

const CompletedTask = (context) => {
	const { setState } = context;

	return <Box>
		<Button
			onClick={ () => setState((state) => ({
				...state,
				filter: 'completed',
			})) }
		>Completed</Button></Box>;
};

export default CompletedTask;
