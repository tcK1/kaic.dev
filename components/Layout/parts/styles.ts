import styled from 'styled-components';

export const Container = styled.nav``;

export const Content = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.li`
  display: block;
  margin: 0 0.5rem;
`;

export const A = styled.a`
  display: flex;
  text-decoration: none;
  color: white;

  transition: opacity 0.2s ease-in-out;

  opacity: 0.5;

  :hover {
    opacity: 1;
  }
`;
