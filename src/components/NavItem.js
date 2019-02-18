import React from 'react';
import { scrollTo } from '../lib/scroll';

const NavItem = ({ selector, children }) => {
  return (
    <a
      tabIndex="0"
      className="nav-type nav--item"
      onClick={() => scrollTo(selector, 60)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          scrollTo(selector, 60);
        }
      }}
    >
      {children}
    </a>
  );
};

export default NavItem;
