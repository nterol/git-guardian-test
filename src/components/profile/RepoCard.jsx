import React from "react";
import { Card, RepoContainer } from "./styles";
import { Row } from "../layout-styles";

const RepoCard = ({ repo }) => {
  const orderedRepo = repo.sort(
    (a, b) => b.stargazers.totalCount - a.stargazers.totalCount
  );
  return (
    <Card>
      {orderedRepo.map((e, i) => (
        <RepoContainer
          key={`repo-${e.name}`}
          last={i === orderedRepo.length - 1}
        >
          <h2>{e.name}</h2>
          <p>{e.description}</p>
          <Row>
            <p style={{ marginRight: "8px" }}>
              {`${e.stargazers.totalCount} `}
              <span role="img" aria-label="github stars">
                ⭐
              </span>
            </p>
            <p>
              {`${e.commitComments.totalCount} commentaire${
                e.commitComments.totalCount > 1 ? "s" : ""
              } de commit `}
              <span role="img" aria-label="github comments">
                💬
              </span>
            </p>
          </Row>
        </RepoContainer>
      ))}
    </Card>
  );
};

export default RepoCard;
