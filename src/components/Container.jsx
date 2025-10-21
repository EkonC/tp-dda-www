import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxw};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(3)};
`;

export default Container;