import { rndString } from '@laufire/utils/random';

const addFields = (context) => {
	const { config: { idLength },
		state: { todo, todos }} = context;

	return [...todos, {	...todo,
		id: rndString(idLength), checked: false }];
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

const getCheckedOrNot = (context) => {
	const { state: { todos }, data } = context;

	return	todos.map((todoList) => (todoList.id === data.id
		? { ...todoList, checked: !todoList.checked }
		: todoList));
};

const removeClearedTask = (context) => {
	const { state: { todos }} = context;

	return todos.filter((todoList) => todoList.checked === false);
};

const getSelectedTodo = (context) => {
	const { state: { todos }} = context;

	return todos.map((todoList) => ({ ...todoList, checked: true }));
};

const getFilteredTask = {
	active: (context) => getActiveList(context),
	all: ({ state: { todos }}) => todos,
	completed: (context) => getCompletedTask(context),
};

const getActiveList = (context) => {
	const { state: { todos }} = context;

	return todos.filter((todo) => todo.checked === false);
};
const getCompletedTask = (context) => {
	const { state: { todos }} = context;

	return todos.filter((todo) => todo.checked === true);
};

const todoManager = {
	addFields,
	getFilteredTask,
	getCompletedTask,
	getActiveList,
	getSelectedTodo,
	getCheckedOrNot,
	removeClearedTask,
	editFields,
	removeData,
	isItemThere,
	resetInput,
	toggleEdit,
};

export default todoManager;
