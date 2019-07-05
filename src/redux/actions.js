import todo from '../apis/todo';

export const getTodoList = () => async dispatch => {
	const response = await todo.get('/todos?_limit=50');
	
	dispatch({ type: 'FETCH_TODO_LIST', payload: response.data });
}