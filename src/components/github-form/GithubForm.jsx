import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import connect from "./connect";

import { H1, AuthInput, Error, Button, ErrorButton, Info } from "./styles";
import { Col, Row } from "../layout-styles";

function RawGithubForm(props) {
  const [redirect, setRedirect] = useState(false);
  const [value, setValue] = useState(props.token);
  const [tokenError, setTokenError] = useState(false);

  const handleClick = () => {
    if (!!value) {
      props.storeToken(value);
      window.localStorage.setItem("github token", value);
      setRedirect(true);
    } else setTokenError(true);
  };

  const handleChange = ({ target: { value } }) => setValue(value);

  const handleReset = () => {
    setTokenError(false);
    if (props.error) props.resetError();
  };

  return redirect ? (
    <Redirect to="/profile" />
  ) : (
    <Col style={{ margin: "0 5%" }}>
      <H1>Entrez votre token Github:</H1>
      <Row>
        <AuthInput type="password" value={value} onChange={handleChange} />
        <Button onClick={handleClick} active={!!value}>
          Voir mon profil
        </Button>
      </Row>
      {!value.length ? (
        <Info>
          Pour voir votre profil, veuillez créer un token via l'interface Github
          <br />
          Assurez vous d'autoriser les champs suivants au minimum:
          <blockquote>
            <ul>
              {[
                "user",
                "public_repo",
                "repo",
                "repo_deployment",
                "repo:status",
                "read:org",
                "read:repo_hook",
                "read:public_key",
                "read:gpg_key"
              ].map(auth => (
                <li>{auth}</li>
              ))}
            </ul>
          </blockquote>
        </Info>
      ) : (
        undefined
      )}
      {props.error || tokenError ? (
        <Error>
          Votre token est incorrect
          <ErrorButton onClick={handleReset}>ok</ErrorButton>
        </Error>
      ) : (
        undefined
      )}
    </Col>
  );
}

const GithubForm = connect(RawGithubForm);

export default GithubForm;
