import React, { ReactNode, FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  Container, Content, Item, A,
} from './styles';

type ItemsListProps = {
  children: ReactNode
  containerType: 'footer' | 'nav'
};

const ItemsList = ({ children, containerType }: ItemsListProps) => (
  <Container as={containerType}>
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

ItemsList.defaultProps = {
  containerType: 'nav',
} as ItemsListProps;

const navItems: string[] = ['index', 'timeline'];

export const Nav: FC = () => (
  <ItemsList>
    {navItems.map((item) => (
      <Link
        key={item}
        href={`/${item}`}
        passHref
      >
        <A>{item}</A>
      </Link>
    ))}
  </ItemsList>
);

const footerItems: {
  href: string
  icon: IconDefinition
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

export const Footer: FC = () => (
  <ItemsList containerType="footer">
    {footerItems.map(({ href, icon }) => (
      <A
        key={href}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={icon} height="1.375rem" />
      </A>
    ))}
  </ItemsList>
);
