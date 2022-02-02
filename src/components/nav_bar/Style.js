import styled from "styled-components";

export const LinkContainer = styled.nav`
  & > a {
      color: black;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
      text-align: center;
      text-decoration: none;
      vertical-align: baseline;
    }
`;

export const WebNavigation = styled.nav`

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 4.62rem;
  width: 100%;
`;

export const MobileNavigation = styled.nav``;
