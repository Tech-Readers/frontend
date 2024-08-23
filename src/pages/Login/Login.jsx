import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const handleSubscribeClick = () => {
        navigate("/cadastro");
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
                    <form>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Insira seu email." />

                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Insira sua senha."
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
