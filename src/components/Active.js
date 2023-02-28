import { Box, Button } from '@mui/material';
import React from 'react';

const ActiveList = (context) => {
	const { setState } = context;

	return <Box>
		<Button onClick={ () => setState((state) => ({
			...state,
			filter: 'active',
		})) }
		>Active</Button></Box>;
};

export default ActiveList;
