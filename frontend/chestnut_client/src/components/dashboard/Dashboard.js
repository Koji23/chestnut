import React from 'react';
import { connect } from 'react-redux';
import testActionCreator from '../../actionsCreators/testActionCreator';

const Dashboard = (props) => {
  const clickHandler = () => {
    props.addTest(1);
  };
  console.log(props);
  return (
    <div className="dashbaord">
      <div>{props.test}</div>
      <button onClick={clickHandler}>Add</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    test: state.test,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTest: val => (dispatch(testActionCreator(val))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

