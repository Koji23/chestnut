import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../actionsCreators/userActionCreators';

const Profile = (props) => {
  // const clickHandler = () => {
  //   const myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');
  //   fetch(`http://localhost:4000/api/users/${1}`, {
  //     method: 'GET',
  //     headers: myHeaders,
  //     // mode: 'cors',
  //     // cache: 'default',
  //   }).then(res => {
  //     console.log(res.json());
  //   });
  // };
  return (
    <div className="profile">
      <div>Profile</div>
      <br />
      {
        props.profile.id ? 
          <div>{`${props.profile.first_name} ${props.profile.last_name}`}</div> :
          <button onClick={props.getProfile}>Get Profile</button>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
