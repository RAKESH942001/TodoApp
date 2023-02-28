import React from 'react';
import { Box, Button } from '@mui/material';
const AllButton = (context) => {
	const { setState } = context;

	return (
		<Box>
			<Button
				onClick={ () => setState((state) => ({
					...state,
					filter: 'all',
				})) }
			>All</Button>
		</Box>);
};

export default AllButton;
