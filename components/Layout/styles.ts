import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const Content = styled.main`
  display: grid;
  place-items: center;
  padding: 2.5rem;
`;
