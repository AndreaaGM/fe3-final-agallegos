
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { rutas } from "./Routes/rutas";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Components/utils/useFunctions";



function App() {
  const {state} = useContextGlobal();
  const background = state.tema == "dark" ? { backgroundColor: "black", color: "white" } : {};

  return (
    
    <>
      <div className="App" data-bs-theme={state.tema} style={background}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path={rutas.home} element={<Home />} />
          <Route path={rutas.contact} element={<Contact />} />
          <Route path={rutas.detail + "/:id"} element={<Detail />} />
          <Route path={rutas.favs} element={<Favs />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
