import { Routes, Route } from "react-router-dom"
import PainelDoMedico from "./pages/PainelMedico";
import Home from "./pages/Home";
import PainelPaciente from "./pages/PainelPaciente";
import Cadastro from "./pages/Cadastro";
import FilaEspera from "./pages/FilaEspera";
import Triagem from "./pages/Triagem";
import AppRoutes from "./routes/AppRoutes"
import './App.css'


function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/painel-medico" element={<PainelDoMedico />} />
      <Route path="/painel-paciente" element={<PainelPaciente />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/fila-espera" element={<FilaEspera />} />
      <Route path="/triagem" element={<Triagem />} />
    </Routes>
  )
}

export default App
