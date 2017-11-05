function profileReducer(state = {}, action) {
  switch (action.type) {
    case 'PROFILE':
      return Object.assign(state, action.profile);
    default:
      return state;
  }
}

export default profileReducer;
