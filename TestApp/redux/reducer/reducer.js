const initialState = {
    books: [],
    searchText: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_TEXT':
        return {
          ...state,
          searchText: action.payload,
        };
      case 'SET_BOOKS':
        return {
          ...state,
          books: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  