// import { combineReducers } from 'redux';
import userReducer from './userReducer';

const testReducer = (state = 0, action) => {
  if (action.type === 'ADD') {
    return state + action.payload;
  }
  return state;
};

// const rootReducer = combineReducers({
//   user: userReducer,
//   test: testReducer,
// });

function rootReducer(state = {}, action) {
  return {
    user: userReducer(state.user, action),
    test: testReducer(state.test, action),
  };
}

export default rootReducer;
