import styled from "styled-components";

export const Input = styled.input`
  color: black;
  font-size: 1em;
  border: 2px solid #546de5;
  border-radius: 3px;
  padding: 10px;
  transition: 0.3s;

  &:focus {
    outline-color: #e15f41;
    transition: 0.3s;
  }

  &:focus::placeholder {
    color: transparent;
    transition: 0.2s;
  }
`;

export const Title = styled.h1`
  color: #546de5;
`;

export const Title2 = styled.h2`
  color: #546de5;
`;

export const Li = styled.li`
  font-weight: 500;
  font-size: 20px;
`;
