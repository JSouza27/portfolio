import styled from 'styled-components';

const LinkContainer = styled.ul`
  & > a {
      color: black;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
      /* margin: 0 0.625rem; */
      text-align: center;
      text-decoration: none;
      transition: color 0.4s ease 0s;
      vertical-align: baseline;
    }

  @media(min-width: 767px) {
    & > a:hover {
      color: #926402;
    }

    & > a:nth-child(2)::before {
      content: '';
      border-right: 1px solid black;
      margin: 0 0.625rem;
    }

    & > a:nth-child(3)::before {
      content: '';
      border-right: 1px solid black;
      margin: 0 0.625rem;
    }
    
    & > a:nth-child(3)::after {
      content: '';
      border-right: 1px solid black;
      margin: 0 0.625rem;
    }
  }
`;

export default LinkContainer;
