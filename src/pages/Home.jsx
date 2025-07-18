import { Link } from 'react-router-dom';
import '../styles/painelPaciente.css'
const Home = () => {
    
  return (
    <>
    <div className="home-container">
      <h1>Sistema de Atendimento Hospitalar</h1>
      <img src="https://www.novida.com.br/wp-content/uploads/2018/04/Atendimento-Hospitalar.jpg" title="Imagem de Hospital"></img>
      <nav className="menu-nav">
        <h2>Escolha uma opção</h2>
        <ul id="menu">
          <li><Link to="/login-medico">Painel do Médico</Link></li>
          <li><Link to="/painel-paciente">Painel do Paciente</Link></li>
        </ul>
      </nav>
      </div>
    </>
  );
};

export default Home;
