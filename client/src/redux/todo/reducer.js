const INITIAL_STATE = {
	list: [],
	user: [],
	todo: '',
	name: '',
	completed: false,
	localTodo: [],
	page: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case 'FETCH_TODO_LIST':
			return { ...state, list: action.payload };
		case 'FETCH_USER':
			return { ...state, user: action.payload };
		case 'TODO_CHANGE':
				return { ...state, todo: action.payload };
		case 'NAME_CHANGE':
				return { ...state, name: action.payload };
		case 'CHECKBOX_CHANGE':
				return { ...state, completed: action.payload };
		case 'FETCH_LOCAL_TODO_LIST':
				return { ...state, localTodo: action.payload };
		case 'CREATE_TODO':
			return { ...state, createTodo: action.payload }
		case 'CHANGE_PAGE':
				return { ...state, page: action.payload };
		default:
			return state;
	}
};