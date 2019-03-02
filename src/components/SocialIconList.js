import React, { Component } from 'react';
import styled from 'styled-components';
import SocialIcon from './SocialIcon';
import { SIZES } from '../lib/styleVars';

const Styled_SocialIconList = styled.div`
  display: flex;
  align-items: center;
`;

const Styled_SocialIconList_SocialIcon = styled(SocialIcon)`
  font-size: 28px;
  &:not(:last-child) {
    margin-right: 32px;
    @media (max-width: ${SIZES.XXS_SCREEN}px) {
      margin-right: 28px;
    }
  }
`;

class SocialIconList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styled_SocialIconList>
        <Styled_SocialIconList_SocialIcon
          href="https://github.com/joewang96"
          targetBlank={true}
          iconClass="icon-github"
          ariaLabel="Github profile"
        />
        <Styled_SocialIconList_SocialIcon
          href="https://www.linkedin.com/in/joseph-wang-7b0751129/"
          targetBlank={true}
          iconClass="icon-linkedin"
          ariaLabel="LinkedIn profile"
        />
        <Styled_SocialIconList_SocialIcon
          href="mailto:wang.jo@husky.neu.edu"
          targetBlank={false}
          iconClass="icon-google"
          ariaLabel="Send mail to wang.jo@husky.neu.edu"
        />
        <Styled_SocialIconList_SocialIcon
          href="https://dribbble.com/josephwang"
          targetBlank={true}
          iconClass="icon-dribbble"
          ariaLabel="Dribbble profile"
        />
      </Styled_SocialIconList>
    );
  }
}

export default SocialIconList;
