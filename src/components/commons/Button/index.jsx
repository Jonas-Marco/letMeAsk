import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { typographyVariants } from '../../../theme/typographyVariants';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${({ theme, color }) => get(theme, `colors.text.${color}.contrastText`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, color }) => get(theme, `colors.text.${color}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.background.${variant}.color`)};
`;

const ButtonWrapper = styled.button`
  width: 100%;
  border-radius: 8px;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: ${typographyVariants.paragraphy.fontSize};
  font-weight: bold;
  padding:16px 0;
  ${propToStyle('margin')}
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  transition: filter 0.2s;
  &:hover,
  &:focus {
    filter: brightness(0.9);
  }
`;

export const Button = ({
  type, variant, color, children, ...props
}) => (
  <ButtonWrapper
    as="button"
    type={type}
    variant={variant}
    color={color}
    {...props}
  >
    {children}
  </ButtonWrapper>
);
