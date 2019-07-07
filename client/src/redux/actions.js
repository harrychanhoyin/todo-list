import todo from '../apis/todo';
import localServer from '../apis/localSever';

export const getTodoList = () => async dispatch => {
	const response = await todo.get('/todos?_limit=50');
	
	dispatch({ type: 'FETCH_TODO_LIST', payload: response.data });
}

export const getUser = () => async dispatch => {
	const response = await todo.get(`users`);
	
	dispatch({ type: 'FETCH_USER', payload: response.data });
}

export const todoChange = (value) => {
	return {
		type: 'TODO_CHANGE',
		payload: value
	};
}

export const nameChange = (value) => {
	return {
		type: 'NAME_CHANGE',
		payload: value
	};
}

export const checkboxChange = (value) => {
	return {
		type: 'CHECKBOX_CHANGE',
		payload: value
	};
}

export const getLocalTodoList = () => async dispatch => {
	const response = await localServer.get('/todos');
	
	dispatch({ type: 'FETCH_LOCAL_TODO_LIST', payload: response.data });
}

export const createTodo = (formData) => async dispatch => {
	const response = await localServer.post('/todos', formData);
	
	dispatch({ type: 'CREATE_TODO', payload: response.data });
	window.location.reload()
}

export const changePage = (page) => {
	return {
		type: 'CHANGE_PAGE',
		payload: page
	};
}