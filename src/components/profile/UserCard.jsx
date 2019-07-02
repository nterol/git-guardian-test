import React from "react";

import { Card, BioInfo, Bio, AvatarUrl, UserContainer } from "./styles";

const UserCard = ({ bio, avatarUrl, name, company, repoCount }) => (
  <UserContainer>
    <Card width={30}>
      <BioInfo>
        <AvatarUrl src={avatarUrl} />
        <h2>{name}</h2>
      </BioInfo>
      <Bio>
        <span role="img" aria-label="github biography">
          🔖
        </span>
        {` "${bio}"`}
      </Bio>
      {company ? (
        <p>
          <b>
            <span role="img" aria-label="entreprise">
              🏢
            </span>
            Entreprise:
          </b>
          {company}
        </p>
      ) : (
        undefined
      )}
      <p>
        <span role="img" aria-label="github biography">
          🗂
        </span>
        {` ${repoCount} repo${repoCount > 1 ? "s" : ""} `}
      </p>
    </Card>
  </UserContainer>
);

export default UserCard;
