const FilaEspera = () => {
    const filaDeAtendimento = JSON.parse(localStorage.getItem("filaDeAtendimento")) || [];

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
        </div>
    </>
  );
};

export default FilaEspera;
