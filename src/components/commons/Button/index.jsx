import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { typographyVariants } from '../../../theme/typographyVariants';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${({ theme, color }) => get(theme, `colors.text.${color}.contrastText`)};
  background-color: #FFF;
  border: 1px solid #835afd;
  display: flex;
`;

const ButtonDefault = css`
  color: ${({ theme, color }) => get(theme, `colors.text.${color}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.background.${variant}.color`)};
`;

const ButtonWrapper = styled.button` 
  border-radius: 8px;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: ${typographyVariants.paragraphy.fontSize};
  font-weight: bold;
  padding:16px 0;
  
  &:hover,
  &:focus {
    filter: brightness(0.9);
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${propToStyle('margin')}
  ${propToStyle('padding')}
  ${propToStyle('border')}
  ${propToStyle('display')}
  ${propToStyle('overflow')}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  transition: filter 0.2s;
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
