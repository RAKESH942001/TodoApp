import { rndString } from '@laufire/utils/random';

const addAndEditData = (context) => {
	const { config: { idLength },
		state: { inputData, isEdit, tasks }} = context;

	return isEdit
		? tasks.map((task) => (task.id === inputData.id ? inputData : task))
		: [...tasks, {	...inputData, id: rndString(idLength) }];
};

const removeData = (context) => {
	const { state: { tasks }, data } = context;

	return tasks.filter((task) => task.id !== data.id);
};

const editData = (context) => {
	const { state: { tasks }, data } = context;

	const selectedData = tasks.filter((task) => task.id === data.id);

	return { ...selectedData };
};

const isItemThere = ({ state: { inputData: { name }}}) => name;

const todoManager = {
	addAndEditData,
	removeData,
	editData,
	isItemThere,
};

export default todoManager;
