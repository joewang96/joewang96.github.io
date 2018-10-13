import { RichText } from 'prismic-reactjs';
import React from 'react';

// -- Function to add unique key to props
const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};

export const htmlSerializer = (type, element, content, children, key) => {
  const { Elements } = RichText;
  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      const props = { className: 'body' };
      return React.createElement('p', propsWithUniqueKey(props, key), children);

    // Don't wrap images in a <p> tag
    case Elements.image:
      return '<img src="' + element.url + '" alt="' + element.alt + '">';

    // Return null to stick with the default behavior
    default:
      return null;
  }
};
