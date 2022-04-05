import styled from "styled-components";
const Button = styled.button`
  border: 1px ${(props) => (props.Border ? `${props.Border}` : null)};
  font-size: ${(props) => (props.font ? `${props.font}` : null)};
  border-radius: ${(props) => (props.Brdr ? `${props.Brdr}` : null)};
  cursor: pointer;
  width: ${(props) => (props.width ? `${props.width}` : null)} padding
    ${(props) => (props.padd ? `${props.padd}` : null)};
  box-sizing: border-box;
  background-color: ${(props) =>
    props.primary ? `${props.primary}` : "black"};
  color: ${(props) => (props.Text ? `${props.Text}` : "black")};
`;

export { Button };
