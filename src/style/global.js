import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html, body, #root {
  background: #FFF;
  -webkit-font-smoothing: antialiased !important;
  display: flex;
  justify-content:center;
}
`;
