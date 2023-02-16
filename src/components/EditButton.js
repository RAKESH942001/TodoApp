import { peek } from '@laufire/utils/debug';
import React from 'react';

const EditButton = (context) => {
	const { setState, data: task, state: { inputData }} = context;

	peek(inputData);
	return <div>
		<button
			className="editButton"
			onClick={ () => setState((state) => ({
				...state,
				inputData: task,
			})) }
		>Edit</button>
	</div>;
};

export default EditButton;
