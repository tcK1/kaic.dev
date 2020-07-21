import React from 'react';
import Link from 'next/link';

import { Container, Item, A } from './styles';

export default () => (
  <nav>
    <Container>
      <Item>
        <Link href="/" passHref>
          <A><code>&#47;* index.tsx *&#47;</code></A>
        </Link>
      </Item>

      <Item>
        <Link href="/timeline" passHref>
          <A><code>&#47;* timeline.tsx *&#47;</code></A>
        </Link>
      </Item>
    </Container>
  </nav>
);
