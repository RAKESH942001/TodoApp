
import { React } from 'react';
import AddButton from './AddButton';
import EditButton from './EditButton';

const ActionButton = (context) => {
	const { state: { isEdit }} = context;

	return isEdit
		? <EditButton { ...context }/>
		: <AddButton { ...context }/>;
};

export default ActionButton;
