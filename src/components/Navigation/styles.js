import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { breakpoints } from '../../utils/styles';

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
  }
`;

export const CartCounter = styled.span`
  background-color: red;
  color: white;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`;
