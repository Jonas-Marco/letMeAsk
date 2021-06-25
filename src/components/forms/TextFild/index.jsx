import React from 'react';
import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';
import Text from '../../commons/Text';

const InputWrapper = styled.div`
`;

const Input = styled(Text)`
  background: #fefefe;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 0px 16px;
  outline: 0;
  height: 50px;
  ${propToStyle('height')}
  
`;

export default function TextField({
  type,
  placeholder,
  onChange,
  value,
  ...props
}) {
  return (
    <InputWrapper>
      <Input
        as="input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...props}
      />
    </InputWrapper>
  );
}
