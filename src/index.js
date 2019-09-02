import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const baseTheme = {
  palette:{
    background: {
      default: "#3f51b5"
    },
  },
  spacing: 7
}

const themeWeb = createMuiTheme(baseTheme);
const themeDark = createMuiTheme({
  ...baseTheme,
  palette:{
    type: 'dark'
  }
});
const themePrint = createMuiTheme({
  ...baseTheme,
  typography: {
    fontSize: 12,
  },
});


const ThemeWithPrint = ({children}) => {
  const isPrintMedia = useMediaQuery('print')
  let theme = themeWeb
  if(isPrintMedia) theme = themePrint
  // 
  // else theme = themeDark
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

ReactDOM.render(
  <ThemeWithPrint>
    <CssBaseline />
    <App />
  </ThemeWithPrint>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
