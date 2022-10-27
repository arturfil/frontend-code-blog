import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { Grid } from '@mui/material'
import SideDrawer from '../components/layout/SideDrawer'
import { ToastContainer } from 'react-toastify'

// styles
import 'react-toastify/dist/ReactToastify.css';
import 'highlight.js/styles/base16/dracula.css'
import { Container } from '@mui/system'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <link rel="shortcut icon" href="/favicon.ico" />
        <Grid container>
          <SideDrawer/>
          <Grid item xs={10}>
            <Grid sx={{display: "flex", flexDirection: "column", margin: "0 auto"}} item xs={9}>
              <ToastContainer theme="colored" position='bottom-right'/>
              <Container sx={{marginTop: 10}}>
                <Component {...pageProps} />
              </Container>
            </Grid>
          </Grid>
        </Grid>
    </Provider>
  )
}

export default MyApp
