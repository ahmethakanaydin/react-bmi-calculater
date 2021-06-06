import styled from "styled-components";

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #546de5;
  padding: 15px;
  display: inline;
  list-style-type: none;
`;

export const Li = styled.li`
  display: inline;
  position: relative;
  padding: 10px 15px 10px 15px;
  font-weight: 700;
  font-size: 22px;
  color: #546de5;
  transition: 0.3s;

  &:hover {
    color: #63cdda;
    transition: 0.3s;
  }
`;

export const A = styled.a`
  text-decoration: none;
`;
