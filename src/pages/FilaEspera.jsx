import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const FilaEspera = () => {
    const [filaDeAtendimento, setFilaDeAtendimento] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("filaDeAtendimento")) || [];
    setFilaDeAtendimento(dados);
  }, []);

  return (
    <>
        <div style={{ marginTop: "30px" }}>
          <h2>Fila de Atendimento</h2>
          {filaDeAtendimento.length === 0 ? (
        <p>Nenhum paciente na fila de espera.</p>
      ) : (

          <ul style={{ listStyle: "none", padding: "0" }}>
            {filaDeAtendimento.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: "10px",
                  margin: "5px 0",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "4px",
                  borderLeft: `4px solid ${
                    item.prioridade === "urgente"
                      ? "#f44336"
                      : item.prioridade === "moderado"
                      ? "#ff9800"
                      : "#4caf50"
                  }`,
                }}
              >
                <strong>{item.paciente}</strong> - {item.motivo}
                <span
                  style={{
                    float: "right",
                    color:
                      item.prioridade === "urgente"
                        ? "#f44336"
                        : item.prioridade === "moderado"
                        ? "#ff9800"
                        : "#4caf50",
                    fontWeight: "bold",
                  }}
                >
                  {item.prioridade.toUpperCase()}
                </span>
              </li>
            ))}
          </ul>
      )}
      <footer>
        <Link to="/">Página Inicial</Link>
      </footer>
    </div>
    </>
  );
};

export default FilaEspera;
