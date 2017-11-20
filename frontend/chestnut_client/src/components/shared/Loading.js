import React from 'react'; 
import PropTypes from 'prop-types';

const Loading = ({ error, timedOut, pastDelay }) => {
  if (error) {
    // When the loader has errored
    return <div>Error!</div>;
  } else if (timedOut) {
    // When the loader has taken longer than the timeout specified to Loadable
    return <div>Taking a long time...</div>;
  } else if (pastDelay) {
    // When the loader has taken longer than the delay. Loadable defaults to 200ms
    return <div>Loading...</div>;
  }
  // When the loader has just started
  return null;
};

export default Loading;
