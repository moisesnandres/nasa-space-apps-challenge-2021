import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import '../styles/globals.css'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LocalizationProvider>
  )
}
