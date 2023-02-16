import React from 'react';

const InputData = (context) => {
	const { setState, state: { inputData }} = context;

	return <div className="inputData">
		<label>Enter</label>
		<input
			type="text"
			value={ inputData.name }
			placeholder="value"
			onChange={ ({ target: { value }}) => setState((state) => ({
				...state,
				inputData: { ...inputData, name: value },
			})) }
		/>
	</div>;
};

export default InputData;
