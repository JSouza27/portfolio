import styled from 'styled-components';

const NavBarContainer = styled.div`
  & > .navigation {
    display: none;
  }

  & > .mobile-navigation {
    display: flex;
  }

  align-items: center;
  display: flex;
  height: 3rem;
  width: 100%;

  @media(min-width: 767px) {
    & > .mobile-navigation {
      display: none;
    }

    & > .navigation {
      display: flex;
    }

    
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 2rem;
  }
`;

export default NavBarContainer;
