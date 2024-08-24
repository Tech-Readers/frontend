// src/pages/Login/Login.jsx:
import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/userService";

export const Login = () => {
    const navigate = useNavigate();

    // Estados para armazenar email e senha
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Função para manipular o redirecionamento ao cadastro
    const handleSubscribeClick = () => {
        navigate("/cadastro");
    };

    // Função para manipular o envio do formulário de login
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginData = {
                email,
                senha: password
            };

            // Chama a função loginUser para autenticar o usuário
            await loginUser(loginData);

            // Redireciona para a página principal após o login bem-sucedido
            navigate("/home");
        } catch (error) {
            console.error("Erro ao autenticar o usuário:", error);
            alert("Falha no login. Verifique suas credenciais e tente novamente.");
        }
    };

    return (
        <div className="container">
            <div className="left-section">
                <img
                    src="src/components/LOGO TECH READERS.png"
                    alt="Tech Reader Logo"
                    className="logo"
                />
                <img
                    src="src/components/TECH READER logo 2.png"
                    alt="Tech Reader Logo"
                    className="logo2"
                />
            </div>
            <div className="right-section">
                <div className="login-box">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Insira seu email." 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Insira sua senha."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="options">
                            <div>
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Lembre-se</label>
                            </div>
                            <a href="#" className="forgot-password">
                                Esqueci a senha
                            </a>
                        </div>

                        <button type="submit">Entrar</button>

                        <div className="separator">
                            <span>ou</span>
                        </div>

                        <div className="register">
                            Ainda não possui cadastro?{" "}
                            <a href="" onClick={handleSubscribeClick}>
                                Cadastre-se
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;





