import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Index = () => (
  <Container>
    <div>
      <h1>
        <i>Salve</i>! Welcome to my place inside the internet.
      </h1>
      <h2>
        This is were I will showcase everything I want. Like, anything really.
      </h2>
      <span>
        I write code, but mostly just talk about it.
        Currently working as a front-end software engineer.
      </span>
    </div>
  </Container>
);

export default Index;
