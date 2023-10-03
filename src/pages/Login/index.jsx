import { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../contexts/auth";

const Login = () => {
  const {authenticated, login} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <>
      <div id="login" className="login">
        <h1 className="title">Login do sistema</h1>
        <p>
          {String(authenticated)}
          <br />
          A senha deve ser "123" para autenticar</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="actions">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
