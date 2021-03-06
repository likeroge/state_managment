import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AppWrapper = styled(Col)`
  height: 100vh;
  width: 100vw;
`;
