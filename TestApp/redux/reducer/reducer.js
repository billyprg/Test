const initialState = {
  show_splash: null,
  post: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        post: action.payload,
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
