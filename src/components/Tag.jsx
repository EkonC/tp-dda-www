import styled from "styled-components";

const Tag = styled.span`
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: #0d1530;
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: .85rem;
`;

export default Tag;