import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import {BrowserRouter, Route, Routes} from "react-router"
import Men from "./components/Men"
import Women from "./components/Women"
import Error404 from "./components/Error404"
function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
