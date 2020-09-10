import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::after 
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  } 

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default GlobalStyles
