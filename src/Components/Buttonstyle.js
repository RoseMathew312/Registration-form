import styled, { css } from "styled-components";

const Buttonstyle = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: green;
  ${(props) =>
    props.primary &&
    css`
      color: white;
    `}
  ${(props) =>
    props.outline &&
    css`
      background: white;
      color: ${(props) => (props.color ? props.color : "Blue")};
      border: 2px solid ${(props) => (props.color ? props.color : "Blue")};
    `}
		${(props) =>
    props.pill &&
    css`
      border-radius: 20px;
    `}
		${(props) =>
    props.square &&
    css`
      border-radius: 0px;
    `}
		${(props) =>
    props.disabled &&
    css`
      opacity: 0.65;
      cursor: not-allowed;
    `};
`;

export default Buttonstyle;
