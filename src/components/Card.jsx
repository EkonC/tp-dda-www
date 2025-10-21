import styled from "styled-components";

const Card = styled.div`
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.panel}, ${({ theme }) => theme.colors.panelSoft});
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export default Card;