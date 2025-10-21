import styled from "styled-components";

export const H2 = styled.h2`
  margin: 0;
  font-size: clamp(1.1rem, 0.7vw + 1rem, 1.5rem);
`;

export const H3 = styled.h3`
  margin: ${({ theme }) => theme.spacing(2)} 0 ${({ theme }) => theme.spacing(1)};
  font-size: 1.07rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Small = styled.span`
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: .9rem;
`;