import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&family=Roboto:ital,wght@0,100;0,500;1,100;1,300;1,400;1,500;1,700&display=swap');

html,
body {
    padding: 0;
    margin: 0;
    font-size: 18px;
    font-family: 'Public Sans', sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

export default GlobalStyles;
