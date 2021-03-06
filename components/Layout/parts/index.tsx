import React, { ReactNode } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
  {
    href: '/whoami',
    text: 'who am i',
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
  Icon: IconType;
}[] = [
  {
    href: 'https://github.com/tcK1',
    Icon: FaGithub,
  },
  {
    href: 'https://linkedin.com/in/kaicbastidas',
    Icon: FaLinkedin,
  },
];

export const Footer = () => (
  <ItemsList containerType="footer">
    {footerItems.map(({ href, Icon }) => (
      <A key={href} href={href} target="_blank" rel="noreferrer">
        <Icon />
      </A>
    ))}
  </ItemsList>
);
