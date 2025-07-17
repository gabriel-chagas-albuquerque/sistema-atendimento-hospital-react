import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <>
      <h1>Sistema de Atendimento Hospitalar</h1>
      <nav>
        <ul>
          <li><Link to="/painel-medico">Painel do Médico</Link></li>
          <li><Link to="/painel-paciente">Painel do Paciente</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
