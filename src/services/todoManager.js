import { rndString } from '@laufire/utils/random';

const addId = (context) => {
	const { config: { idLength }, state: { inputData }} = context;

	return {
		...inputData, id: rndString(idLength),
	};
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

const todoManager = {
	addId,
	removeData,
	editData,
};

export default todoManager;
