import { createGlobalStyle } from 'styled-components';
import colors from './constants/colors';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

    body > #root > div {
        font-family: 'Lato', sans-serif;
        height: 100%;
        background-color: ${colors.DARK}
    }

    body {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;