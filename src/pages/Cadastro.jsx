import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/cadastro.css'

function Cadastro() {
  const [paciente, setPaciente] = useState("");
  const [motivo, setMotivo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (paciente.trim() && motivo.trim()) {
      localStorage.setItem("paciente", paciente);
      localStorage.setItem("motivo", motivo);

      setPaciente("");
      setMotivo("");

      navigate("/triagem");
    } else {
      alert("Preenchimento obrigatório dos campos nome do paciente e motivo do atendimento");
    }
  };

  return (
    <div class="cadastro">
      <h2>Cadastro do Paciente</h2>
      <form onSubmit={handleSubmit} id="form-cadastro">
        <div>
          <label htmlFor="paciente">Nome do Paciente:</label>
          <input
            id="paciente"
            type="text"
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
          />
        </div>
        <div class="cadastro-seg">
          <label htmlFor="motivo">Motivo do Atendimento:</label>
          <input
            id="motivo"
            type="text"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />
        </div>
        <button id="btn-cadastro" type="submit">Cadastrar</button>
      </form>
      <footer>
        <Link to="/">Página Inicial</Link>
      </footer>
    </div>
  );
}

export default Cadastro;
