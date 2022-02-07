import styled from 'styled-components';

const Content = styled.div`
  border-top: 1px solid #c7c7c7;
  padding: 1.5rem 0;
  width: 100%;

  & div {
    height: 4.56rem;
    line-height: 2.4rem;
  }

  & > div > h2 {
    font-size: 1.2rem;
    margin: 0;
    line-height: 1.4rem;
  }

  & > div > span {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4rem;
    vertical-align: baseline;
  }

  & > div > a {
    color: black;
    font-size: 1.5rem;
    margin-right: 0.5rem;
    text-decoration: none;
    vertical-align: baseline;
  }

  & > div:nth-child(4) {
    color: #3d495c;
    font-size: 0.75rem;
    height: 100%;
    line-height: 1rem;
    margin: auto 0;
    width: 18rem;
  }

  @media(min-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`;

export default Content;
