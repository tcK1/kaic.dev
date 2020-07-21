import styled from 'styled-components';

export const Container = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.li`
  display: block;
  margin: 0.5rem;
`;

export const A = styled.a`
  text-decoration: none;
  color: black;

  transition: opacity .2s ease-in-out;

  opacity: .5;

  :hover {
    opacity: 1;
  }

  code {
    background: white;
    padding: .25rem .35rem;
    border-radius: .30rem;
    font-style: italic;
    border: .01rem solid gray;
  }
`;
