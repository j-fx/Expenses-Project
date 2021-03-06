import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #00adb3;
  background-color: #005f66;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;

  :hover,
  .new-expense button:active {
    background-color: #00adb3;
    border-color: #00adb3;
  }

  .alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
  }

  .alternative:hover,
  .alternative:active {
    background-color: #ddb3f8;
  }

  :disabled {
    background-color: #cccccc;
    color: #666666;
  }
`;

export default Button;
