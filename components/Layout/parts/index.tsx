import React, { ReactNode } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { Container, Content, Item, A } from './styles';

type ItemsListProps = {
  children: ReactNode;
  containerType: 'footer' | 'nav';
};

const ItemsList = ({ children, containerType }: ItemsListProps) => (
  <Container as={containerType}>
    <Content>
      {React.Children.map(children, (child, index) => (
        <>
          {index > 0 && '|'}
          <Item>{child}</Item>
        </>
      ))}
    </Content>
  </Container>
);

ItemsList.defaultProps = {
  containerType: 'nav',
} as ItemsListProps;

const navItems: {
  href: string;
  text: string;
}[] = [
  {
    href: '/',
    text: 'index',
  },
  {
    href: '/timeline',
    text: 'timeline',
  },
];

export const Nav = () => (
  <ItemsList>
    {navItems.map(({ href, text }) => (
      <Link key={text} href={href} passHref>
        <A>{text}</A>
      </Link>
    ))}
  </ItemsList>
);

const footerItems: {
  href: string;
  icon: IconDefinition;
}[] = [
  {
    href: 'https://github.com/tcK1',
    icon: faGithub,
  },
  {
    href: 'https://linkedin.com/in/kaicbastidas',
    icon: faLinkedin,
  },
];

export const Footer = () => (
  <ItemsList containerType="footer">
    {footerItems.map(({ href, icon }) => (
      <A key={href} href={href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} height="1.375rem" />
      </A>
    ))}
  </ItemsList>
);
