import todo from '../apis/todo';

export const getTodoList = () => async dispatch => {
	const response = await todo.get('/todos?_limit=50');
	
	dispatch({ type: 'FETCH_TODO_LIST', payload: response.data });
}

export const getUser = () => async dispatch => {
	const response = await todo.get(`users`);
	
	dispatch({ type: 'FETCH_USER', payload: response.data });
}

export const changePage = (page) => {
	return {
		type: 'CHANGE_PAGE',
		payload: page
	};
}