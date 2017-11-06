function profileReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_PROFILE_INIT':
      return state;
    case 'GET_PROFILE_RECEIVED':
      console.log(state, action);
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}

export default profileReducer;
