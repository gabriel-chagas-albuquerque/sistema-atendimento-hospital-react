import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Triagem = () => {
  const [paciente, setPaciente] = useState("");
  const [motivo, setMotivo] = useState("");
  const [filaDeAtendimento, setFilaDeAtendimento] = useState([]);
  const [prioridade, setPrioridade] = useState("");
  const navigate = useNavigate();

  // Carregar dados do localStorage quando o componente montar
  useEffect(() => {
    const pacienteStorage = localStorage.getItem("paciente");
    const motivoStorage = localStorage.getItem("motivo");
    const filaStorage = localStorage.getItem("filaDeAtendimento");

    if (pacienteStorage) setPaciente(pacienteStorage);
    if (motivoStorage) setMotivo(motivoStorage);
    if (filaStorage) {
      try {
        setFilaDeAtendimento(JSON.parse(filaStorage));
      } catch (error) {
        console.error("Erro ao parsear fila de atendimento:", error);
        setFilaDeAtendimento([]);
      }
    }
  }, []);

  const handleSubmit = () => {
    if (!prioridade) {
      alert("Por favor, selecione uma prioridade!");
      return;
    } else {
      navigate("/paciente/fila-de-espera");
      const novoAtendimento = {
        id: Date.now(),
        paciente: paciente,
        motivo: motivo,
        prioridade: prioridade,
        timestamp: new Date().toISOString(),
      };

      const novaFila = [...filaDeAtendimento, novoAtendimento];
      setFilaDeAtendimento(novaFila);

      // Salvar no localStorage
      localStorage.setItem("filaDeAtendimento", JSON.stringify(novaFila));

      alert("Triagem realizada com sucesso!");
      setPrioridade("");
    }
  };

  const handlePrioridadeChange = (e) => {
    setPrioridade(e.target.value);
  };

  return (
    <div
      className="container"
      style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Triagem</h1>

      <div
        className="container-usuarios"
        style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}
      >
        <div id="info-usuarios" style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ marginBottom: "20px" }}>Informações do Paciente</h2>

          <div className="info-paciente" style={{ marginBottom: "15px" }}>
            <h3 style={{ margin: "0 0 5px 0", fontSize: "16px" }}>Nome:</h3>
            <p
              id="nome-paciente"
              style={{
                margin: "0",
                padding: "8px",
                backgroundColor: "#f5f5f5",
                borderRadius: "4px",
                minHeight: "20px",
              }}
            >
              {paciente || "Não informado"}
            </p>
          </div>

          <div className="info-paciente" style={{ marginBottom: "15px" }}>
            <h3 style={{ margin: "0 0 5px 0", fontSize: "16px" }}>Motivo:</h3>
            <p
              id="motivo-atendimento"
              style={{
                margin: "0",
                padding: "8px",
                backgroundColor: "#f5f5f5",
                borderRadius: "4px",
                minHeight: "20px",
              }}
            >
              {motivo || "Não informado"}
            </p>
          </div>
        </div>

        <div className="form-triagem" style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ marginBottom: "20px" }}>Classificação</h2>

          <ul
            id="triagem"
            className="menu"
            style={{ listStyle: "none", padding: "0" }}
          >
            <li style={{ marginBottom: "15px" }}>
              <label
                htmlFor="urgente"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "10px",
                  border: "2px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor:
                    prioridade === "urgente" ? "#ffebee" : "white",
                }}
              >
                <div
                  className="urgente"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#f44336",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                ></div>
                Urgente
                <input
                  type="radio"
                  name="prioridade"
                  id="urgente"
                  className="classificacao"
                  value="urgente"
                  checked={prioridade === "urgente"}
                  onChange={handlePrioridadeChange}
                  style={{ marginLeft: "auto" }}
                />
              </label>
            </li>

            <li style={{ marginBottom: "15px" }}>
              <label
                htmlFor="moderado"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "10px",
                  border: "2px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor:
                    prioridade === "moderado" ? "#fff3e0" : "white",
                }}
              >
                <div
                  className="moderado"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#ff9800",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                ></div>
                Moderado
                <input
                  type="radio"
                  name="prioridade"
                  id="moderado"
                  className="classificacao"
                  value="moderado"
                  checked={prioridade === "moderado"}
                  onChange={handlePrioridadeChange}
                  style={{ marginLeft: "auto" }}
                />
              </label>
            </li>

            <li style={{ marginBottom: "15px" }}>
              <label
                htmlFor="leve"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "10px",
                  border: "2px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: prioridade === "leve" ? "#e8f5e8" : "white",
                }}
              >
                <div
                  className="leve"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#4caf50",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                ></div>
                Leve
                <input
                  type="radio"
                  name="prioridade"
                  id="leve"
                  className="classificacao"
                  value="leve"
                  checked={prioridade === "leve"}
                  onChange={handlePrioridadeChange}
                  style={{ marginLeft: "auto" }}
                />
              </label>
            </li>
          </ul>

          <button
            onClick={handleSubmit}
            id="btn-enviar"
            className="btn"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2196f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Enviar
          </button>
        </div>
      </div>

      {/* Mostrar fila de atendimento se houver itens */}
    </div>
  );
};

export default Triagem;
