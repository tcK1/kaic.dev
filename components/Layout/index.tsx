import React, { ReactNode } from 'react';
import { IconContext } from 'react-icons';

import { Nav, Footer } from './parts';
import { Container, Content } from './styles';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => (
  <IconContext.Provider value={{ className: 'icons' }}>
    <Container>
      <Nav />

      <Content>{children}</Content>

      <Footer />
    </Container>
  </IconContext.Provider>
);
