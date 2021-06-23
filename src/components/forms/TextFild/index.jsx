import React from 'react';
import styled from 'styled-components';
import Text from '../../commons/Text';

const InputWrapper = styled.div`
`;

const Input = styled(Text)`
  background: #FFF;
  height: 50px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  border-radius: 8px;
  padding: 0px 16px;
  outline: 0;
`;

export default function TextField({
  type,
  placeholder,

  ...props
}) {
  return (
    <InputWrapper>
      <Input
        as="input"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </InputWrapper>
  );
}
