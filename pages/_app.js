import '../styles/globals.css'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar textDecoration="none" color="white"/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
