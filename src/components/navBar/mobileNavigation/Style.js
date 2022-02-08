import styled from 'styled-components';

const MobileNav = styled.nav`
  height: 100%;
  position: relative;
  width: 100%;

  & > ul {
    background-color: #f3f3f3;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 3.2rem;
    width: 100%;
    z-index: 9999;

    & > a {
      font-size: 1.375em;
      padding: 1rem;
    }
  }
`;

export default MobileNav;
