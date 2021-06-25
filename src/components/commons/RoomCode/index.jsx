import React from 'react';
import { Button } from '../Button';
import Text from '../Text';

export default function RoomCode({ code }) {
  function copyCode() {
    navigator.clipboard.writeText(code);
  }
  return (
    <Button
      ghost
      height="40px"
      type="submit"
      color="quaternary"
      display="flex"
      padding="16px"
      onClick={copyCode}
    >
      <Text
        variant="paragraphy"
        tag="p"
        color="tertary"
      >
        sala#
        {code}
      </Text>

    </Button>
  );
}
