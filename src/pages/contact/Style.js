import styled from 'styled-components';

export const ContactWrapper = styled.div`
  align-items: center;
  color: #000;
  display: flex;
  font-size: 1rem;
  font-family: 300;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem 1.5rem 0;
  width: 100vw;
`;

export const ContactContainer = styled.div`
  width: 100%;

  &> div > h1 {
    font-size: 1.68rem;
    font-weight: 700;
    line-height: 2rem;
  }

  @media(min-width: 767px) {
    display: flex;
    justify-content: space-around;
    width: 61.25rem;

    & > div {
      max-width: 29.93rem;
    }

    &> div > h1 {
      font-size: 2.625rem;
      font-weight: 700;
      line-height: 3.06rem;
    }
  }
`;
