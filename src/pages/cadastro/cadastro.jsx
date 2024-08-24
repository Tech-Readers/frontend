// src/pages/cadastro/cadastro.jsx:
// src/pages/cadastro/cadastro.jsx:
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
import { createUser } from "../../services/userService";


export const Cadastro = () => {
    const navigate = useNavigate();

    // Estado para armazenar dados do formulário
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "", // Adicionado para controle de confirmação de senha
        telefone: "",
        logradouro: "",
        numero: "",
        bairro: "",
        complemento: "",
        cep: "",
        municipio: "",
        uf: "",
        // imagem: null,
    });

    // Função para atualizar o estado com dados do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Função para redirecionar para a página inicial
    const handleGoToLanding = () => {
        navigate("/");
    };

    // Função para submeter o formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Certifique-se de que as senhas coincidem
            if (formData.senha !== formData.confirmarSenha) {
                alert("As senhas não coincidem!");
                return;
            }

            // Dados formatados conforme esperado pelo backend
            const userData = {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha,
                // imagem: formData.imagem, // Supondo que imagem seja uma URL ou seja tratada separadamente
                enderecos: {
                    logradouro: formData.logradouro,
                    numero: formData.numero,
                    bairro: formData.bairro,
                    complemento: formData.complemento || "",
                    cep: formData.cep,
                    municipio: formData.municipio,
                    uf: formData.uf,
                },
                telefones: [
                    {
                        contato: formData.telefone,
                    },
                ],
            };

            // Chama o serviço para criar o usuário
            await createUser(userData);

            // Redireciona para a página principal após o cadastro bem-sucedido
            navigate("/home");
        } catch (error) {
            console.error("Erro ao cadastrar o usuário:", error);
        }
    };

    return (
        <>
            <StyleContainer>
                <StyleLogoTitulo>
                    <img src={Logomarca} alt="logo" />
                </StyleLogoTitulo>
                <StyleForm onSubmit={handleSubmit}>
                    <StyleFormOne>
                        <StyleFormTwo>
                            <StyleFormUser>
                                <label>Nome</label>
                                <StyleInput
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                />

                                <label>Email</label>
                                <StyleInput
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />

                                <label>Senha</label>
                                <StyleInput
                                    name="senha"
                                    type="password"
                                    value={formData.senha}
                                    onChange={handleInputChange}
                                />

                                <label>Confirmar Senha</label>
                                <StyleInput
                                    name="confirmarSenha"
                                    type="password"
                                    value={formData.confirmarSenha}
                                    onChange={handleInputChange}
                                />

                                <label>Telefone</label>
                                <StyleInput
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleInputChange}
                                />

                                <StylesAll>
                                    <StyleInputPersonalizadoCep>
                                        <label>CEP</label>
                                        <StyleContainerCep
                                            name="cep"
                                            value={formData.cep}
                                            onChange={handleInputChange}
                                        />
                                    </StyleInputPersonalizadoCep>
                                    <StyleInputPersonalizadoNumero>
                                        <label>Número</label>
                                        <StyleContainerCep
                                            name="numero"
                                            value={formData.numero}
                                            onChange={handleInputChange}
                                        />
                                    </StyleInputPersonalizadoNumero>
                                </StylesAll>

                                <label>Rua</label>
                                <StyleInput
                                    name="logradouro"
                                    value={formData.logradouro}
                                    onChange={handleInputChange}
                                />

                                <label>Bairro</label>
                                <StyleInput
                                    name="bairro"
                                    value={formData.bairro}
                                    onChange={handleInputChange}
                                />

                                <label>Complemento</label>
                                <StyleInput
                                    name="complemento"
                                    value={formData.complemento}
                                    onChange={handleInputChange}
                                />

                                <label>Município</label>
                                <StyleInput
                                    name="municipio"
                                    value={formData.municipio}
                                    onChange={handleInputChange}
                                />

                                <label>UF</label>
                                <StyleInput
                                    name="uf"
                                    value={formData.uf}
                                    onChange={handleInputChange}
                                />

                                <StyleButton type="submit">
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

export default Cadastro;
