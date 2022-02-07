import styled from 'styled-components';

const NaBarContainer = styled.div`
  display: flex;
  height: 4.62rem;
  width: 100%;
  
  @media(min-width: 767px) {
    & > .mobile-navigation {
      display: none;
    }

    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 2rem;
  }
`;

export default NaBarContainer;
