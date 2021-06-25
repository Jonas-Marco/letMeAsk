import React from 'react';
/* import { useParams } from 'react-router-dom'; */
import styled from 'styled-components';
import Logo from '../Logo';
/* import RoomCode from '../RoomCode'; */

const MenuWrapper = styled.div`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
`;

const MenuContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Menu({ children }) {
/*   const params = useParams();
  const roomId = params.id; */

  return (
    <MenuWrapper>
      <MenuContent>
        <Logo />
        {children}
        {/* <RoomCode code={roomId} /> */}
      </MenuContent>
    </MenuWrapper>
  );
}
