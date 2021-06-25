import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 100px auto;
  width: 50em;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(100px);
  grid-template-columns: 1fr 1fr;
`;
export const Right = styled.div`
  border-radius: 0 30px 30px 0;
  position: relative;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`;

export const Form = styled.div`
  position: absolute;
  height: 150%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    bottom: 1em;
    font-size: 3rem;
    text-align: center;
    position: relative;
    line-height: 1;
    right: 50%;
    color: black;
    white-space: nowrap;
  }
`;

export const Inputs = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  position: relative;
  right: 50%;
  align-items: center;
  justify-content: center;
  width: 20em;

  &p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }

  ${(props) =>
    props.radio &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 4;
    `}
`;

export const Input = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;

  &:placeholder {
    color: #595959;
    font-size: 12px;
  }
  ${(props) =>
    props.radio1 &&
    css`
      height: 10px;
    `}
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Style = styled.div`
  color: red;
  fontsize: 13;
  margin-top: 0.5vh;
  font-weight: 600;
`;
export const Button = styled.button`
  ${(props) =>
    props.signup &&
    css`
      position: relative;
      right: 50%;
      width: 50%;
      white-space: nowrap;
      outline: none;
      margin-top: 3em;
      border-radius: 2px;
      background: linear-gradient(
        90deg,
        rgb(39, 176, 255) 0%,
        rgb(0, 232, 236) 100%
      );

      outline: none;
      letter-spacing: 3px;
      border: none;
      color: #fff;
      font-size: 1rem;

      &:hover {
        cursor: pointer;
        background: linear-gradient(
          90deg,
          rgb(39, 143, 255) 0%,
          rgb(12, 99, 250) 100%
        );
        transition: all 0.4s ease-out;
      }
    `}

  ${(props) =>
    props.plus &&
    css`
      position: relative;
      right: 50%;
      height: 42px;
      width: 40px;
      font-size: 30px;

      border: none;

      &:hover {
        background-color: gray;
        color: white;
        transition: 200ms ease-in-out;
      }
    `}
`;
