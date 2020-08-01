import React, { ReactNode } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import {
  Container, Content, Item, A,
} from './styles';

interface ItemsListProps {
  children: ReactNode
}

const ItemsList = ({ children }: ItemsListProps) => (
  <Container>
    <Content>
      {
        React.Children.map(children, (child, index) => (
          <>
            {index > 0 && '|'}
            <Item>{child}</Item>
          </>
        ))
      }
    </Content>
  </Container>
);

export const Nav = () => (
  <ItemsList>
    <Link href="/" passHref>
      <A>index</A>
    </Link>

    <Link href="/timeline" passHref>
      <A>timeline</A>
    </Link>
  </ItemsList>
);

export const Footer = () => (
  <ItemsList>
    <A href="https://github.com/tcK1" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} height="1.375rem" />
    </A>

    <A href="https://linkedin.com/in/kaicbastidas/" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faLinkedin} height="1.375rem" />
    </A>
  </ItemsList>
);
