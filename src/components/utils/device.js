import { css } from "styled-components";

const sizes = {
  xlarge: 2000,
  large: 1000,
  medium: 900,
  small: 700,
  xsmall: 400
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
