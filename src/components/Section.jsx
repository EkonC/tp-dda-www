import styled from "styled-components";

const Section = styled.section`
  margin: ${({ theme }) => theme.spacing(4)} 0;
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export default Section;