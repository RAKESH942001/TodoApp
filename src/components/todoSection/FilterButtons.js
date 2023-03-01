import { Box, Button } from '@mui/material';
import React from 'react';

const FilterButtons = (context) => {
	const { setState, config: { filters }} = context;

	return (
		filters.map((data, key) =>
			<Box key={ key }>
				<Button
					onClick={ () => setState((state) => ({
						...state,
						filter: data,
					})) }
				>{data}
				</Button>
			</Box>));
};

export default FilterButtons;
