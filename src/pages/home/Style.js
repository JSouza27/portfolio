import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    & > button {
      background-color: none;
      border: none;
      color: black;
      cursor: pointer;
      font-size: 1.37rem;
      float: right;
      height: 3.1rem;
      outline: none;
      position: relative;
      width: 3.1rem;
    }

    & > button > div {
      background-color: black;
      height: 0.125rem;
      position: absolute;
      right: 12.5px;
      transition: 500ms;
      width: 1.5rem;
    }

    & > button > div::before {
      background-color: black;
      content: '';
      height: 0.125rem;
      left: 0;
      position: absolute;
      top: 10px;
      transition: 500ms;
      width: 1.5rem;
    }

    & > button > div::after {
      background-color: black;
      bottom: 10px;
      content: '';
      height: 0.125rem;
      left: 0;
      position: absolute;
      transition: 500ms;
      width: 1.5rem;
    }

    & > button > .active {
      background-color: transparent;

      &::after {
        top: 0;
        transform: rotate(225deg);
      }

      &::before {
        top: 0;
        transform: rotate(135deg);
      }
    }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media(min-width: 767px) {
    align-content: space-between;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2.5rem;

    & > button {
      display: none;
    }

    & > :nth-child(1) { order: 2 }
    & > :nth-child(2) { order: 1 }
    & > :nth-child(3) { order: 3 }
  }
`;

export const Resume = styled.div`

  @media(min-width: 767px) {
    max-width: 23.21rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6em;
  text-align: justify;
`;

export const SubMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;

  & > a {
    align-items: center;
    border: 1px solid black;
    border-radius: 100px;
    color: black;
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    max-height: 8.81rem;
    justify-content: center;
    margin: 0.5rem;
    min-height: 5rem;
    min-width: 5rem;
    text-decoration: none;
    max-width: 8.81rem;
  }

  & > :nth-child(1) {
    background-color: #eea302;
  }

  & > :nth-child(2) {
    background-color: #ff3b25;
  }

  & > :nth-child(3) {
    background-color: #80d8da;
  }

  @media(min-width: 767px) {
    max-width: 30rem;

    & > a {
      height: 8.75rem;
      width: 8.75rem;
    }

    & > a:hover {
      background-color: #f3f3f3;
    }
  }
`;

export const ImageProfile = styled.div`
  background-color: #e3e3e3;
  border: none;
  border-radius: 50%;
  margin: 1rem;
  min-height: 17.5rem;
  min-width: 17.5rem;

  @media(min-width: 767px) {
    height: 30rem;
    margin: 2rem;
    width: 30rem;
  }
`;
