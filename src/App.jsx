
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { rutas } from "./Routes/rutas";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";



function App() {
  return (
    <>
      <div className="...">
        <Navbar />
        <Routes>
          <Route path={rutas.home} element={<Home />} />
          <Route path={rutas.contact} element={<Contact />} />
          <Route path={rutas.detail + "/:id"} element={<Detail />} />
          <Route path={rutas.favs} element={<Favs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
