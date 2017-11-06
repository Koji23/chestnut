import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: blue;
  color: white;
`;

const ListItem = styled.li`
  font-size: 28px;
  color: ${props => props.theme.primary};
`;

const NavLink = styled(Link)`
  color: white;
  &:visited {
    color: yellow;
  }
`;

export {
  UnorderedList,
  ListItem,
  NavLink,
};
