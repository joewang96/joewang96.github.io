import React from 'react';
import { scrollTo } from '../lib/scroll';

const NavItem = ({ selector, children, href, ...rest }) => {
  const conditionalProps =
    href === null || href === undefined
      ? {
          onClick: () => scrollTo(selector, 60),
          onKeyDown: e => {
            if (e.key === 'Enter') {
              scrollTo(selector, 60);
            }
          },
        }
      : { href };
  return (
    <a
      tabIndex="0"
      className="nav-type nav--item"
      {...conditionalProps}
      {...rest}
    >
      {children}
    </a>
  );
};

export default NavItem;
