import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 60px;
  border: 2px solid #546de5;
  border-radius: 3px;
  background: #546de5;
  transition: 0.3s;
  color: white;

  &:hover {
    background: white;
    color: #546de5;
    transition: 0.3s;
  }
`;
