import styled from "styled-components";

import media from "../utils/device";

export const ProfilePage = styled.div`
  display: flex;
  flex-direction: row;

  ${media.small`
  flex-direction:column;
  `}

  justify-content: space-evenly;
  padding: 16px;
`;

export const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 4px;

  box-shadow: 3px 3px 5px 6px #ccc;
`;

export const BioInfo = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
`;

export const Bio = styled.p`
  text-align: left;
  font-style: italic;
  background-color: lightgrey;
  border-radius: 4px;
  word-break: break-word;
`;
export const AvatarUrl = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 32px;
  border-radius: 50%;
`;

export const RepoContainer = styled.div`
  background: white;
  ${({ last }) => !last && "border-bottom: 1px solid grey;"}
`;

export const UserContainer = styled.div`
  max-height: 400px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 24px;
  }
`;
