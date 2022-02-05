import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  color: #000;
  display: flex;
  font-size: 1rem;
  font-family: 300;
  flex-direction: column;
  height: 100%;
  line-height: 1.6em;
  padding: 1.5rem 1.5rem 0;
  width: 100vw;

  & > h2 {
    font-size: 1.68rem;
    font-weight: 700;
    line-height: 2rem;
  }

  & > h3 {
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 2rem;
  }
  
  & > h4 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const SubWrapper = styled.div`
  width: 100%;

  @media(min-width: 767px) {
    width: 61.25rem;
  }
`;

export const Cotainer = styled.div`
  
  & > h3 {
    flex-basis: 50%;
  }
  
  & > div {
    flex-basis: 50%;
  }

  @media(min-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

export const ContentDivision = styled.div`
  content: '';
  background-color: #c7c7c7;
  height: 1px;
  margin: 2.18rem 0;
  width: 100%;
`;
