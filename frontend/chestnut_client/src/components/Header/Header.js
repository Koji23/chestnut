import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UnorderedList, ListItem, Navlink } from './HeaderStyles';

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
          <ListItem><Navlink to='/dashboard'>Home</Navlink></ListItem>
          <ListItem><Navlink to='/kanban'>Kanban</Navlink></ListItem>
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
