import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
import red from '@material-ui/core/colors/red'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: red[900],
    },
  },
})

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
