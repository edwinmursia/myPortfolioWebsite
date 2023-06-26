import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience,  Hero, Navbar, Tech, EarthComponent, Footer} from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
          <Navbar />
          <EarthComponent />
        <About />
        <Experience />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
