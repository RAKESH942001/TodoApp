import React from 'react';

const InputData = (context) => {
	const { setState } = context;

	return <div className="inputData">
		<label>Enter</label>
		<input
			type="text"
			placeholder="value"
			onChange={ ({ target: { value }}) => setState((state) => ({
				...state,
				inputData: value,
			})) }
		/>
	</div>;
};

export default InputData;
