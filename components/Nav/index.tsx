import React from 'react';
import Link from 'next/link';

import { Container, Item, A } from './styles';

export const Nav = () => (
  <nav>
    <Container>
      <Item>
        <Link href="/" passHref>
          <A>index</A>
        </Link>
      </Item>
      |
      <Item>
        <Link href="/timeline" passHref>
          <A>timeline</A>
        </Link>
      </Item>
    </Container>
  </nav>
);
