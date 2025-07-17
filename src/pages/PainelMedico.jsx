import { useEffect, useState } from "react";

const TODAS_AS_PRIORIDADES = ["urgente", "moderado", "leve"];

function PainelDoMedico() {
  const [fila, setFila] = useState([]);
  const [pacienteAtual, setPacienteAtual] = useState(null);

  // Carrega os dados do localStorage apenas uma vez ao montar o componente
  useEffect(() => {
    const filaSalva = JSON.parse(localStorage.getItem("filaDeAtendimento")) || [];
    const pacienteSalvo = JSON.parse(localStorage.getItem("pacienteEmAtendimento")) || null;
    setFila(filaSalva);
    setPacienteAtual(pacienteSalvo);
  }, []); // array vazio evita loop infinito

  // Atualiza localStorage quando a fila mudar
  useEffect(() => {
    localStorage.setItem("filaDeAtendimento", JSON.stringify(fila));
  }, [fila]);

  // Atualiza localStorage quando o paciente atual mudar
  useEffect(() => {
    if (pacienteAtual) {
      localStorage.setItem("pacienteEmAtendimento", JSON.stringify(pacienteAtual));
    } else {
      localStorage.removeItem("pacienteEmAtendimento");
    }
  }, [pacienteAtual]);

  const iniciarAtendimento = (index) => {
    const paciente = fila[index];
    const novaFila = [...fila];
    novaFila.splice(index, 1);
    setFila(novaFila);
    setPacienteAtual(paciente);
  };

  const finalizarAtendimento = () => {
    setPacienteAtual(null);
  };

  // Ordena e filtra a fila para mostrar no componente
  const filaOrdenada = [...fila].sort((a, b) => b.prioridadeCode - a.prioridadeCode);
  const filaFiltrada = filaOrdenada.slice(0, 3);

  return (
    <div>
      <h1>Fila de Atendimento</h1>

      <div id="atendimentoAtual">
        <h2>Atendimento Atual:</h2>
        {pacienteAtual ? (
          <>
            <p id="nomeAtendimento">Nome: {pacienteAtual.nome}</p>
            <p id="descricaoAtendimento">Motivo: {pacienteAtual.descricao}</p>
            <button id="finalizarAtendimento" onClick={finalizarAtendimento}>
              Finalizar Atendimento
            </button>
          </>
        ) : (
          <p id="nomeAtendimento">Nenhum paciente em atendimento.</p>
        )}
      </div>

      <div id="filaDeEspera">
        <h2>Fila de Espera:</h2>
        {filaFiltrada.length === 0 ? (
          <p>Nenhum paciente na fila de espera</p>
        ) : (
          filaFiltrada.map((paciente, index) => (
            <div key={index} className={`paciente ${paciente.prioridade}`}>
              <div className="AtendimentoAtualContainer">
                <div className="nome">Nome: {paciente.nome}</div>
                <div className="prioridade">Prioridade: {paciente.prioridade}</div>
                <div className="motivo">Motivo: {paciente.descricao}</div>
              </div>
              {index === 0 && (
                <button onClick={() => iniciarAtendimento(index)} disabled={!!pacienteAtual}>
                  Iniciar Atendimento
                </button>
              )}
            </div>
          ))
        )}
      </div>
      <footer>
        <Link to="/">Página Inicial</Link>
      </footer>
    </div>
  );
}

export default PainelDoMedico;
