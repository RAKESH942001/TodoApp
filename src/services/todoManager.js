import { rndString } from '@laufire/utils/random';

const addFields = (context) => {
	const { config: { idLength },
		state: { inputData, tasks }} = context;

	return [...tasks, {	...inputData, id: rndString(idLength) }];
};

const editFields = (context) => {
	const { state: { inputData, tasks }} = context;

	return tasks.map((task) => (task.id === inputData.id ? inputData : task));
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

const resetInput = () => '';

const toggleEdit = (context) => {
	const { state: { isEdit }} = context;

	return !isEdit;
};

const todoManager = {
	addFields,
	editFields,
	removeData,
	editData,
	isItemThere,
	resetInput,
	toggleEdit,
};

export default todoManager;
