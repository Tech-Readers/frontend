import React from 'react';
import { StyleContainer,StyleLogoTitulo,StyleForm,StyleFormOne,StyleFormTwo,StyleFormUser,StyleButton,StyleInput,StyleH1,StyleContainerCep, StyleInputPersonalizadoCep,StyleInputPersonalizadoNumero,StylesAll  } from '../../components/cadastro/FormUserStyle';
import { Logo, } from '../../components/cadastro/Logo';

export const LandingPage = () => {
   
    return (
    <>
    <StyleContainer>
         <StyleLogoTitulo>              
            <Logo/>          
           <StyleH1>TECH READER</StyleH1>
        </StyleLogoTitulo>
     <StyleForm>
        <StyleFormOne>
        <StyleFormTwo>
            <StyleFormUser>
                <label>Nome</label>
                <StyleInput></StyleInput>
                <label>Email</label>
                <StyleInput></StyleInput>
                <label>Senha</label>
                <StyleInput></StyleInput>
                <label>Confirmar Senha</label>
                <StyleInput></StyleInput>
                <StylesAll>    
                <StyleInputPersonalizadoCep>
                <label>CEP</label> 
                <StyleContainerCep></StyleContainerCep>          
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
                <StyleButton>Cadastrar</StyleButton>
            </StyleFormUser>
        </StyleFormTwo>
        </StyleFormOne>       
     </StyleForm>
    </StyleContainer>
        
    </>
)
}