
import './App.css'

import Navbar from "./components/Navbar"
import MainContainer from "./components/MainContainer"
import Footer from './components/Footer'

const App = () => {
  

  return (
    <>
      <div id="container">
          <Navbar />
          <MainContainer />
      </div>
      <Footer />
    </>
  )
}

export default App
