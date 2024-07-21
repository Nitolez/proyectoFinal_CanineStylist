import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";
import { UserProvider } from './UserContext';


function App() {

  return (
    <>
     <UserProvider>
        <BrowserRouter>
          <Header />
          <div className="fondo">
          <MainComponent />
          </div>
        </BrowserRouter>
        <Footer />
        </UserProvider>
    </>
  )
}

export default App
