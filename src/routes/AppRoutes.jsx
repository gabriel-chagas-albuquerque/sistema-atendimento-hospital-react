import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PainelPaciente from "../pages/PainelPaciente";
import Triagem from "../pages/Triagem";
import FilaEspera from "../pages/FilaEspera";
import LoginMedico from "../pages/LoginMedico";
import PainelMedico from "../pages/PainelMedico";
import PageLayout from "../layouts/PageLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />} >
          <Route index element={<Home />} />
          <Route path="/paciente" element={<PainelPaciente />} />
          <Route path="/paciente/triagem" element={<Triagem />} />
          <Route path="/paciente/fila-de-espera" element={<FilaEspera />} />
          <Route path="/login" element={<LoginMedico />} />
          <Route path="/painel-do-medico" element={<PainelMedico />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
