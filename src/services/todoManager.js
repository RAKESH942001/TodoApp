/* eslint-disable no-magic-numbers */
import { peek } from '@laufire/utils/debug';
import { rndString, rndValue } from '@laufire/utils/random';

const addFields = (context) => {
	const { config: { idLength },
		state: { todo, todos }} = context;

	return [...todos, {	...todo,
		id: rndString(idLength), checked: false }];
};

const addTask = (context) => {
	const { state: { tasks }, data } = context;

	return tasks.filter((task) => task.id === data.id);
};

const editFields = (context) => {
	const { state: { todo, todos }} = context;

	return todos.map((task) => (task.id === todo.id ? todo : task));
};

const removeTask = (context) => {
	const { state: { tasks }, data } = context;

	return tasks.filter((task) => task.id !== data.id);
};

const removeTodo = (context) => {
	const { state: { todos }, data } = context;

	return todos.filter((task) => task.id !== data.id);
};

const isItemThere = ({ state: { todo }}) => todo;

const resetInput = () => '';

const toggleEdit = (context) => {
	const { state: { isEdit }} = context;

	return !isEdit;
};

const getToggleTodo = (context) => {
	const { state: { todos }, data } = context;

	return	todos.map((todoList) => (todoList.id === data.id
		? { ...todoList, checked: !todoList.checked }
		: todoList));
};

const removeCompletedTask = (context) => {
	const { state: { todos }} = context;

	return todos.filter((todoList) => todoList.checked === false);
};

const getSelectedTodo = (context) => {
	const { state: { todos }} = context;

	return todos.map((todoList) => ({ ...todoList, checked: true }));
};

const getFilteredTodo = {
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

const isCompleted = (context) => getCompletedTask(context).length !== 0;

const isTodos = (context) =>	{
	const { state: { todos }} = context;

	return todos.length !== 0;
};

const onEnterKeyPress = (context) => {
	const { state: { isEdit }, setState } = context;

	return (
		isEdit
			? setState(() => todoManager.editTodo(context))
			: setState(() => todoManager.addTodo(context))
	);
};

const editTodo = (context) => {
	const { state } = context;

	return {
		...state,
		todos: todoManager.editFields(context),
		todo: { name: todoManager.resetInput() },
		isEdit: todoManager.toggleEdit(context),
	};
};

const addTodo = (context) => {
	const { state } = context;

	return {
		...state,
		todos: todoManager.addFields(context),
		todo: { name: todoManager.resetInput() },
	};
};

const onEscKeyPress = (context) => {
	const { state, setState } = context;

	return (
		setState(() => ({ ...state,
			todo: { name: todoManager.resetInput(context) }}))

	);
};

const autoGenTodo = (context) => {
	const { setState } = context;
	const { config: { tasksList, delayTime, genLimit }} = context;

	return 	setInterval(() => setState((preState) => ({ ...preState,
		tasks:	peek(preState.tasks.length < genLimit
			?	[...preState.tasks,
				{ name: rndValue(tasksList), id: rndString(4) }]
			: preState.tasks) })), delayTime);
};

const todoManager = {
	addFields,
	removeTodo,
	addTask,
	autoGenTodo,
	editTodo,
	addTodo,
	isTodos,
	onEnterKeyPress,
	onEscKeyPress,
	getFilteredTodo,
	isCompleted,
	getCompletedTask,
	getActiveList,
	getSelectedTodo,
	getToggleTodo,
	removeCompletedTask,
	editFields,
	removeTask,
	isItemThere,
	resetInput,
	toggleEdit,
};

export default todoManager;
