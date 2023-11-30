import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;
export const Link = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: #010101;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #ffffffd2;
  }
`;
