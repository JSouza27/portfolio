import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 29.93rem;
  width: 100%;
`;

export const Form = styled.form`
  margin: 2.5rem 0;

  & > div {
    display: flex;
    flex-direction: column;
    margin: 0.625rem 0;

    & > label {
      margin-bottom: 0.625rem;
    }

    & > input {
      background-color: transparent;
      border: 1px solid black;
      border-radius: 0;
      height: 2.625rem;
      padding: 0.19rem 0.19rem 0.19rem 0.44rem;
      text-align: left;
      text-overflow: ellipsis;
    }

    & > textarea {
      background-color: transparent;
      border: 1px solid black;
      border-radius: 0;
      height: 7.93rem;
      padding: 0.625rem 0.75rem 0.19rem 0.44rem;
      resize: none;
      text-align: left;
    }
  }

  & > button {
      background-color: #eea302;
      border: 1px solid black;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      height: 5.31rem;
      margin: 1rem 0.5rem 0;
      min-height: 5rem;
      min-width: 5rem;
      width: 5.31rem;
    }

  @media(min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0 1.68rem 2.2rem;

    & > div {
      margin: 0.625rem;

      textarea {
        height: 8.81rem;
        width: 14.75rem;
      }
    }

    & > button {
      font-size: 1.375rem;
      line-height: 1.93rem;
      height: 8.75rem;
      margin-top: 2rem;
      width: 8.75rem;
    }

    & > button:hover {
      background-color: #f3f3f3;
    }
  }
`;
