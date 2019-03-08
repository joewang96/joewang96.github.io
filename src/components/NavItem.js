import React from 'react';
import { scrollTo } from '../lib/scroll';

const NavItem = ({ className, selector, children, href, ...rest }) => {
  const conditionalProps =
    href === null ||
    (href === undefined && (selector !== null || selector !== undefined))
      ? {
          onClick: e => {
            scrollTo(selector);
            e.target.blur();
          },
          onKeyDown: e => {
            if (e.key === 'Enter' || e.key === ' ') {
              scrollTo(selector);
              e.preventDefault();
              e.target.blur();
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
