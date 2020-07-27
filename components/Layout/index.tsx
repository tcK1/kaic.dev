import React, { ReactElement } from 'react';

import { Nav, Footer } from './parts';
import { Container, Content } from './styles';

interface Props {
  children: ReactElement
}

export const Layout = ({ children }: Props) => (
  <Container>
    <Nav />

    <Content>
      {children}
    </Content>

    <Footer />
  </Container>
);
