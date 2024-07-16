import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";


function App() {

  return (
    <>
        <BrowserRouter>
          <Header />
          <MainComponent />
        </BrowserRouter>
        <Footer />
    </>
  )
}

export default App
