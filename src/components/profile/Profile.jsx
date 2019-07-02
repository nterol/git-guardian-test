import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import UserCard from "./UserCard";
import RepoCard from "./RepoCard";
import { ProfilePage } from "./styles";
import { Col } from "../layout-styles";
import { UserPlaceholder } from "./placeholder";

import connector from "./connect";

function RawProfile(props) {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const { token, user, error, fetching } = props;
    if (!user && token && !fetching && !error) props.queryUserData();
    else if (error || !token) setRedirect(true);
    return () => setRedirect(false);
  }, [props]);

  if (redirect) return <Redirect to="/" />;
  else if (props.fetching) return <UserPlaceholder />;
  else
    return (
      <ProfilePage>
        <UserCard {...props.user} />
        <Col>
          <h2>Vos projets</h2>
          {props.repo ? <RepoCard repo={props.repo} /> : undefined}
          <h2>Les projets auxquels vous contribuez</h2>
          {props.contrib ? <RepoCard repo={props.contrib} /> : undefined}
        </Col>
      </ProfilePage>
    );
}

const Profile = connector(RawProfile);

export default Profile;
