import { Link } from "react-router-dom";

const PainelPaciente = () => {
    return ( 
        <>
        <div>
      <h1>Portal do Paciente</h1>
      <p>Sistema de Atendimento Hospitalar</p>

      <img
        id="foto"
        src="https://www.sbie.com.br/wp-content/uploads/2017/08/1-humanizacao-hospitalar.jpg"
        alt="Humanização Hospitalar"
      />

      <div className="menu-nav">
        <h2>Escolha uma opção</h2>
        <nav>
          <ul id="menu">
            <li><Link to="/paciente/cadastro">Cadastro</Link></li>
            <li><Link to="/paciente/fila">Fila de Espera</Link></li>
          </ul>
        </nav>
      </div>

      <footer>
        <Link to="/">Página Inicial</Link>
      </footer>
    </div>
        </>
     );
}
 
export default PainelPaciente;