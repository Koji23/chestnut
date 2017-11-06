// import _ from 'lodash';

function getProfileInit(userId) {
  return {
    type: 'GET_PROFILE_INIT',
    userId,
  };
}

function getProfileReceived(userId, user) {
  return {
    type: 'GET_PROFILE_RECEIVED',
    userId,
    user,
  };
}

// function invalidateProfile(userId) {
//   return {
//     type: 'PROFILE_INVALIDATED',
//     userId,
//   };
// }

function getProfile(userId) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  return (dispatch, getState) => {
    dispatch(getProfileInit(userId));
    fetch(`http://localhost:4000/api/users/${userId}`, {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    })
      .then(
        res => res.json(),
        error => console.log('An error occurred: ', error),
      )
      .then((json) => {
        dispatch(getProfileReceived(userId, json.data));
      });
  };
}

export {
  getProfile,
};
