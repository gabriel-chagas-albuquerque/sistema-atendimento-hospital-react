import { Routes, Route } from "react-router-dom"
import PainelDoMedico from "./pages/PainelMedico";
import Home from "./pages/Home";
import PainelPaciente from "./pages/PainelPaciente";
import FilaEspera from "./pages/FilaEspera";
import Triagem from "./pages/Triagem";
import Cadastro from "./pages/Cadastro";
import LoginMedico from "./pages/LoginMedico";
import AppRoutes from "./routes/AppRoutes"
import './App.css'


function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/painel-medico" element={<PainelDoMedico />} />
      <Route path="/painel-paciente" element={<PainelPaciente />} />
      <Route path="/triagem" element={<Triagem />} />
      <Route path="/paciente/cadastro" element={<Cadastro />} />
      <Route path="/paciente/fila-de-espera" element={<FilaEspera />} />
      <Route path="/login-medico" element={<LoginMedico />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
      <Route path="/app/*" element={<AppRoutes />} />
    </Routes>
  )
}

export default App
