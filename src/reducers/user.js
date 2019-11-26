import createReducer from './creator';
import ActionType from '../actions/actionTypes/user';

const initialState = {
  id: 0
};

const userReducer = createReducer(initialState, {
  [ActionType.GET_ME] (state, action) {
    return {
      ...state,
      id: 10
    }
  }
});

export default userReducer;