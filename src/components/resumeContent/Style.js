import styled from 'styled-components';

const SummaryBlock = styled.div`
  margin-bottom: 3.75rem;

  & > span {
    font-size: 1rem;
    text-align: left;
    line-height: normal;
  }

  & > h4 {
    font-size: 1.125rem;
    margin-top: 0;
  }

  & > ul > li {
    margin: 0.5rem  0;
  }
`;

export default SummaryBlock;
