import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height:100vh;
`;

HomeWrapper.AsideWrapper = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  flex: 7;
  padding: 120px 84px;
  background-color: #835afd;
  img{
    max-width: 50%;
  }
`;

HomeWrapper.MainWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 8;
  padding: 0 32px;
`;

HomeWrapper.MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 320px;
  text-align: center;
`;

export const Separetor = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
  &::before{
    content:'';
    flex: 1;
    height: 1px;
    background-color:#a8a8b3;
    margin: 0 16px 0 0;
  }
  &::after{
    content:'';
    flex: 1;
    height: 1px;
    background-color:#a8a8b3;
    margin: 0  0 0 16px;
  }
`;
