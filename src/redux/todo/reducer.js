const INITIAL_STATE = {
	list: [],
	user: [],
	page: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case 'FETCH_TODO_LIST':
			return { ...state, list: action.payload };
		case 'FETCH_USER':
			return { ...state, user: action.payload };
		case 'CHANGE_PAGE':
				return { ...state, page: action.payload };
		default:
			return state;
	}
};