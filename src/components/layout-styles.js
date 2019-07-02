import styled from "styled-components";
import device from "./utils/device";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 24px;
  }
`;

export const Page = styled.div`
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
