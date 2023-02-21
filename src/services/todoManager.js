import { rndString } from '@laufire/utils/random';

const addFields = (context) => {
	const { config: { idLength },
		state: { todo, todos }} = context;

	return [...todos, {	...todo, id: rndString(idLength) }];
};

const editFields = (context) => {
	const { state: { todo, todos }} = context;

	return todos.map((task) => (task.id === todo.id ? todo : task));
};
const removeData = (context) => {
	const { state: { todos }, data } = context;

	return todos.filter((task) => task.id !== data.id);
};

const isItemThere = ({ state: { todo }}) => todo;

const resetInput = () => '';

const toggleEdit = (context) => {
	const { state: { isEdit }} = context;

	return !isEdit;
};

const todoManager = {
	addFields,
	editFields,
	removeData,
	isItemThere,
	resetInput,
	toggleEdit,
};

export default todoManager;
