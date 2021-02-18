const initialState = {};

function labelReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LABELS': {
      return { ...initialState, ...action.labels };
    }
    default: {
      return state;
    }
  }
}

export default labelReducer;
