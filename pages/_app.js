import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { profileContext } from '../contexts/profileContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <profileContext.Provider value={["Francis Kintungi", 28, "Software engineer", "Dar es salaam"]}>
    <NavBar/>
      <Component {...pageProps} />
      <Footer />
    </profileContext.Provider>
    
    </>
  )
}

export default MyApp
