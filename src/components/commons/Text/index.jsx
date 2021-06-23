import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextBase = styled.span`
  color: ${({ theme, color }) => get(theme, `colors.text.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
  ${propToStyle('padding')}
  font-family: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.fontFamily`)};
  font-size: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.fontSize`)};
  font-weight: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.fontWeight`)};
  line-height: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.lineHeight`)};
`;

export default function Text({
  tag, variant, color, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </TextBase>
  );
}
