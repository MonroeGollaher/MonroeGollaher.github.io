import styled from "styled-components";

export const NavWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 0.5rem 1rem;
`;

export const NavTitle = styled.h1`
  font-size: 1.25rem;
  margin-inline-end: 1rem;
`;

export const NavLink = styled.a`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  margin-inline-end: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
