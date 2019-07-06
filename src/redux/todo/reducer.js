const INITIAL_STATE = {
	list: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case 'FETCH_TODO_LIST':
			return { ...state, list: action.payload};
		case 'FETCH_USER':
			return { ...state, user: action.payload};
		default:
			return state;
	}
};