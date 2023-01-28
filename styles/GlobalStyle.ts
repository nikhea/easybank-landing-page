import { createGlobalStyle } from 'styled-components';

const darkBlue = 'hsl(233, 26%, 24%)';
const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-size: 18px;
    font-family: 'Public Sans', sans-serif;
    /* color:#9698a6; */
    position: reative;
    @apply text-grayish-blue;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
h1, h2, h3 {
    font-weight: 300;
    /* color: darkBlue ; */
    margin-bottom: 2rem;
    @apply text-dark-blue;
}

h1 {
    font-size: 3rem;
}

h2 {
    font-size: 2.5rem;
}

h3 {
    font-size: 1.5rem;
}

p {
    line-height: 1.8rem;
}
img{
    width: 100%;
}
`;

export default GlobalStyles;
