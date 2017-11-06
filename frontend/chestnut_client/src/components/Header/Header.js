import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UnorderedList, ListItem, NavLink } from './HeaderStyles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="Header">
        <UnorderedList>
          <ListItem><NavLink to="/dashboard">Home</NavLink></ListItem>
          <ListItem><NavLink to="/kanban">Kanban</NavLink></ListItem>
          <ListItem><NavLink to="/profile">Profile</NavLink></ListItem>
        </UnorderedList>
      </div>
    );
  }
}

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
