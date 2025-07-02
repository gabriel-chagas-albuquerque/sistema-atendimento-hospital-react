import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginMedico = () => {
  const contasMedicos = [
    {
      id: 1,
      login: "jcarlosmedico@mail.com",
      senha: "senha",
    },
    {
      id: 2,
      login: "mariaalice12@mail.com",
      senha: "Dorinha",
    },
    {
      id: 3,
      login: "admin",
      senha: "admin",
    },
  ];

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate()

  function handleLogin(e) {
    setLogin(e.target.value)
  }

  function handleSenha(e) {
    setSenha(e.target.value)
  }

  function handleButton(e) {
    e.defaultPrevented = true
    const verificaLogin = contasMedicos.find((contaMedico) => contaMedico.login === login && contaMedico.senha === senha)

    if(!verificaLogin) {
        alert('Email ou senha incorretos')
    }else{
        navigate('/painel-do-medico')
    }
  } 
  return (
    <>
      <img
        src="https://mv.com.br/storage/blog/1532212022080462ec10b502078.png"
        title="Médica Atendendo um senhor"
        alt="Médica Atendendo um senhor"
      />
      <form action="" id="form-cadastro" className="form">
        <div className="form-itens">
          <label htmlFor="Login">Login</label>
          <input
            type="text"
            id="login"
            placeholder="Digite seu email"
            onChange={handleLogin}
            value={login}
          />
        </div>
        <div className="form-itens">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            onChange={handleSenha}
            value={senha}
          />
        </div>
        <button type="button" id="btn-login" onClick={handleButton}>
          Fazer Login
        </button>
      </form>
    </>
  );
};

export default LoginMedico;
