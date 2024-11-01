import { ADD_TODO, API_ERROR, API_PENDING, API_SUCCESS } from "./constants";

const initialState = {
  todos: [],
  userData: {
    loading: false,
    error: null,
    data: null,
  },
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { id, task }],
      };
    }
    case API_PENDING: {
      return {
        ...state.userData,
        loading: true,
        data: action.payload,
      };
    }
    case API_SUCCESS: {
      return {
        ...state.userData,
        loading: false,
        data: action.payload,
      };
    }
    case API_ERROR: {
      return {
        ...state.userData,
        loading: false,
        data: action.payload,
      };
    }
    default:
      return state;
  }
}
