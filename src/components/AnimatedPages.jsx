import React from "react";
import { Switch, Route } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

import GithubForm from "./github-form/GithubForm";
import Profile from "./profile/Profile";

import useRouter from "./utils/useRouter";
import device from "./utils/device";

const Page = styled.div`
  background: #f4ece2;
  margin-top: 10%;
  @media ${device.laptop} {
    padding: 24px 8px;
  }

  @media ${device.mobileS} {
    /* margin-top: 30%; */
    padding: 8px;
  }

  @media ${device.mobileL} {
    padding: 8px;
  }
`;

function AnimatedPages() {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  return transitions.map(({ item, props, key }) => (
    <Page key={key}>
      <animated.div  style={props}>
        <Switch location={item}>
          <Route path="/" exact component={GithubForm} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </animated.div>
    </Page>
  ));
}

export default AnimatedPages;
