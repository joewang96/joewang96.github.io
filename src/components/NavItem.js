import React from 'react';
import { scrollTo } from '../lib/scroll';

const NavItem = ({ className, selector, children, href, ...rest }) => {
  const conditionalProps =
    href === null ||
    (href === undefined && (selector !== null || selector !== undefined))
      ? {
          onClick: () => scrollTo(selector),
          onKeyDown: e => {
            if (e.key === 'Enter') {
              scrollTo(selector);
            }
          },
        }
      : { href };
  return (
    <a
      tabIndex="0"
      className={`nav-type nav--item ${className}`}
      {...conditionalProps}
      {...rest}
    >
      {children}
    </a>
  );
};

export default NavItem;
