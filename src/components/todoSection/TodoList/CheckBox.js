import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import React from 'react';
import todoManager from '../../../services/todoManager';

const CheckBox = (context) => {
	const { setState, data } = context;

	return (
		<Checkbox
			color="secondary"
			icon={ <FavoriteBorder/> }
			checkedIcon={ <Favorite/> }
			checked={ data.checked }
			onClick={ () => setState((state) => ({
				...state,
				todos: todoManager.getToggleTodo(context),
			})) }
		/>
	);
};

export default CheckBox;
