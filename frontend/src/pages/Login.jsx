import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./app.css";

function Login() {
  return (
    <>

      <div className="login-container">
        <div className="login-card">
          <div className="profile">
             <img className="logo" src="./src/assets/logo0.png" alt="Logo" />
          </div>

          <form className="login-form">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />

            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />

            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
