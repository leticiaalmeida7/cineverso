import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explorar from "./pages/Explorar";
import Buscar from "./pages/Buscar";
import Detalhes from "./pages/Detalhes";
import MinhaLista from "./pages/MinhaLista";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/titulo/:id" element={<Detalhes />} />
        <Route path="/minha-lista" element={<MinhaLista />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;