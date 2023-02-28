import { Box, Button } from '@mui/material';
import React from 'react';

const Buttons = (context) => {
	const { setState, config: { filterData }} = context;

	return (
		filterData.map((data, key) =>
			<Box key={ key }>
				<Button
					onClick={ () => setState((state) => ({
						...state,
						filter: data,
					})) }
				>{data}</Button>
			</Box>));
};

export default Buttons;
