import styled from "styled-components";

export const H1 = styled.h1`
  margin-bottom: 24px;
`;

export const Button = styled.button`
  margin-left: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  background-color: ${({ active }) => (active ? "#6bd3e0" : "#bde2e4")};
`;

export const AuthInput = styled.input`
  border: 1px solid black;
  box-sizing: border-box;
  width: 100%;
  border-color: ${({ value }) => (!!value ? "#6bd3e0" : "#d6c5ad")};
  border-radius: 5px;
  padding: 8px;

  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const ErrorButton = styled.button`
  border: 1px solid white;
  background: transparent;
  margin-left: 16px;
  color: white;
  border-radius: 50%;
  padding: 8px;
`;

export const Info = styled.div`
  background-color: #23d160;
  padding: 16px;
  color: #fff;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const Error = styled(Info)`
  background-color: #ff3860;
`;
