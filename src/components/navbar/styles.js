import styled from "styled-components";

export const Nav = styled.nav`
  min-height: 30px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  background: #d6c5ad;
  padding: 16px;
  color: white;

  h1,
  a {
    margin-right: 16px;
    color: white;
    text-decoration: none;
  }
  a:hover {
    border-bottom: 1px solid white;
  }
`;
