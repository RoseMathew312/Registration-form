import styled from 'styled-components'
const Button = styled.button`
   ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  ${props => props.secondary ? "Black" : "white"};
  background-color: ${props => props.secondary ? "white" : "Black"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 16px;
`;





export default Button;
