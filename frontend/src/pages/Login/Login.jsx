import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      localStorage.setItem(
        "@otica:token",
        response.data.token
      );

      navigate("/admin");

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("E-mail ou senha inválidos");
    }
  }

  return (
    <section className="login">

      <form
        className="login-form"
        onSubmit={handleLogin}
      >

        <h1>Área Administrativa</h1>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Entrar
        </button>

      </form>

    </section>
  );
}

export default Login;