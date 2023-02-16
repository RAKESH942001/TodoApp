import React from 'react';
import todoManager from '../services/todoManager';

const DeleteButton = (context) => {
	const { setState } = context;

	return <div>
		<button
			className="deleteButton"
			onClick={ () => setState((state) => ({
				...state,
				tasks: todoManager.removeData(context),
			})) }
		>
			Delete</button></div>;
};

export default DeleteButton;
