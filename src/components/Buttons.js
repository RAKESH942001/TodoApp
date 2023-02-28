import { Box } from '@mui/material';
import React from 'react';
import ActiveList from './Active';
import AllButton from './AllButton';
import CompletedTask from './Completed';

const Buttons = (context) =>
	<Box>
		<AllButton { ...context }/>
		<ActiveList { ...context }/>
		<CompletedTask { ...context }/></Box>;

export default Buttons;
