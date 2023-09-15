const initialState = {
  books: [],
  lora: [],
  searchText: '',
  show_splash: null,
  news: [],
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
    case 'SET_PRACBOOKS':
      return {
        ...state,
        lora: action.payload,
      };
    case 'SET_NEWS':
      return {
        ...state,
        news: action.payload,
      };
    case 'SHOW_SPLASH':
      return {
        ...state,
        show_splash: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
