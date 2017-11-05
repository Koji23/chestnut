// import { combineReducers } from 'redux';
import userReducer from './userReducer';

const testReducer = (state = 0, action) => {
  console.log(state, action);
  if (action.type === 'ADD') {
    return state + action.payload;
  }
  return state;
};

// const appReducer = combineReducers({
//   user: userReducer,
//   test: testReducer,
// });

function appReducer(state = {}, action) {
  return {
    user: userReducer(state.user, action),
    test: testReducer(state.test, action),
  };
}

export default appReducer;
