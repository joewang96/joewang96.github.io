import styled from 'styled-components';
import { COLORS, FONTS, SIZES } from '../../lib/styleVars';

export const H1 = styled.h1`
  font-family: ${FONTS.SERIF};
  font-size: 46px;
  color: ${COLORS.DARK_PURPLE};
  font-weight: bold;

  @media (max-width: ${SIZES.SM_SCREEN}px) {
    && {
      font-size: 40px;
      line-height: 1.6;
    }
  }
`;

export default H1;
