import React from "react";
import styled, { css, keyframes } from "styled-components";

const placeHolderShimmer = keyframes`
0% {
    background-position: -300px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

const animationName = css`
  animation-name: ${placeHolderShimmer};
`;

export const Placeholder = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  ${animationName}
  animation-timing-function: linear;
  background: #6bd3e0;
  background: linear-gradient(to right, #bde2e4 8%, #eeeeee 18%, #bde2e4 33%);
  background-size: 800px 104px;
  height: ${({ height }) => height}px;
  position: relative;
`;

export const AvatarPlaceholder = styled.div`
  background: #f4ece2;
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 100px;
  width: 100px;
  overflow: hidden;
  background: radial-gradient(circle at 40% 40%, transparent 36%, #f4ece2 10%);
`;

export const TitlePlaceholder = styled.div`
  background: #f4ece2;
  position: absolute;

  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  height: ${({ height }) => height || 10}px;
`;

export const UserPlaceholder = () => (
  <div style={{ margin: "10%" }}>
    <Placeholder height="80">
      <AvatarPlaceholder />
      <TitlePlaceholder top="20" left="100" right="0" />
      <TitlePlaceholder top="50" left="100" right="0" />
    </Placeholder>
  </div>
);
