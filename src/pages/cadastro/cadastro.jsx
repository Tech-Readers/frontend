import React, { useState } from "react";
import {
    StyleContainer,
    StyleLogoTitulo,
    StyleForm,
    StyleFormOne,
    StyleFormTwo,
    StyleFormUser,
    StyleButton,
    StyleInput,
    StyleContainerCep,
    StyleInputPersonalizadoCep,
    StyleInputPersonalizadoNumero,
    StylesAll,
} from "../../components/cadastro/FormUserStyle";
import Logomarca from "/src/assets/TECH-READER-copiar.svg";
import { useNavigate } from "react-router-dom";

export const Cadastro = () => {
    const navigate = useNavigate();
    const handleGoToLanding = () => {
        navigate("/");
    };
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        telefone: "",
        endereco: "",
        id: "",
        imagem: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const formDataToSubmit = new FormData();

            for (const key in formData) {
                formDataToSubmit.append(key, formData[key]);
            }

            await createExchange(formDataToSubmit, token);
            history.push("/home"); // redirecionar para a página principal após a criação bem-sucedida
        } catch (error) {
            console.error("Erro ao criar o anúncio:", error);
        }
    };

    return (
        <>
            <StyleContainer>
                <StyleLogoTitulo>
                    <img src={Logomarca} alt="logo" />
                </StyleLogoTitulo>
                <StyleForm>
                    <StyleFormOne>
                        <StyleFormTwo>
                            <StyleFormUser>
                                <label>Nome</label>
                                <StyleInput
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                ></StyleInput>

                                <label>Email</label>
                                <StyleInput
                                    value={formData.email}
                                    onChange={handleInputChange}
                                ></StyleInput>

                                <label>Senha</label>
                                <StyleInput
                                    value={formData.senha}
                                    onChange={handleInputChange}
                                ></StyleInput>

                                <label>Confirmar Senha</label>
                                <StyleInput
                                    value={formData.senha}
                                    onChange={handleInputChange}
                                ></StyleInput>

                                <StylesAll>
                                    <StyleInputPersonalizadoCep>
                                        <label>CEP</label>
                                        <StyleContainerCep
                                            value={formData.endereco}
                                            onChange={handleInputChange}
                                        ></StyleContainerCep>
                                    </StyleInputPersonalizadoCep>
                                    <StyleInputPersonalizadoNumero>
                                        <label>Número</label>
                                        <StyleContainerCep></StyleContainerCep>
                                    </StyleInputPersonalizadoNumero>
                                </StylesAll>

                                <label>Rua</label>
                                <StyleInput></StyleInput>

                                <label>Bairro</label>
                                <StyleInput></StyleInput>

                                <StyleButton onClick={handleSubmit}>
                                    Cadastrar
                                </StyleButton>

                                <StyleButton onClick={handleGoToLanding}>
                                    Voltar para home
                                </StyleButton>
                            </StyleFormUser>
                        </StyleFormTwo>
                    </StyleFormOne>
                </StyleForm>
            </StyleContainer>
        </>
    );
};
