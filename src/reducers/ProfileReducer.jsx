import { actions } from "../actions";

const initialState = {
  loading: false,
  error: null,
  user: null,
  posts: [],
};

function ProfileReducer(state, action) {
  switch (action.type) {
    case actions.profile.DATA_FETCHING: {
      return { ...state, loading: true };
    }
    case actions.profile.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        user: action.data.user,
        posts: action.data.posts,
      };
    }
    case actions.profile.DATA_FETCH_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    case actions.profile.IMAGE_UPDATED: {
      return {...state, user: {...state.user, avatar: action.data.avatar}}
    }
    

    default: {
      return state;
    }
  }
}

export { initialState, ProfileReducer };
