import styled from "styled-components";

export const StyleContainer = styled.div`
    background-color: #e8e8e8;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
`;
export const StyleLogoTitulo = styled.div`
    width: 735px;
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;
export const StyleH1 = styled.h1`
    width: 393px;
    height: 249px;
    font-size: 80px;
    top: 500px;
    padding-bottom: 30px;
`;
export const StyleForm = styled.div`
    width: 635px;
    padding-left: 7px;
    background-color: #b2a397;
`;
export const StyleFormOne = styled.div`
    width: 635px;
    height: 100vh;
    padding-left: 10px;
    background-color: #c8b4a6;
`;
export const StyleFormTwo = styled.div`
    width: 635px;
    height: 100vh;
    left: 732px;
    background-color: #d7c4b6;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const StyleFormUser = styled.form`
    border: 0.5px solid ${(props) => props.theme.colors.CinzaUm};
    display: flex;
    flex-direction: column;
    width: 412px;
    height: 560px;
    border-radius: 23px;
    background-color: #eeeeee;
    opacity: 75%;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 8px;
`;
export const StyleButton = styled.button`
    width: 300px;
    height: 38px;
    border-radius: 10px;
    background-color: #5a645f;
    color: #e8e8e8;
    font-size: 18px;
    font-family: Poppins;
    margin-top: 10px;
`;
export const StyleInput = styled.input`
    width: 314px;
    height: 36px;
    border-radius: 10px;
    margin-bottom: 5px;
    border: 0.5px solid ${(props) => props.theme.colors.CinzaUm};
`;
export const StylesAll = styled.div`
    display: flex;
`;
export const StyleInputPersonalizadoCep = styled.div`
    display: flex;
    flex-direction: column;
`;
export const StyleInputPersonalizadoNumero = styled.div`
    display: flex;
    flex-direction: column;
`;
export const StyleContainerCep = styled.input`
    border: 0.5px solid ${(props) => props.theme.colors.CinzaUm};
    width: 150px;
    height: 30px;
    border-radius: 10px;
    margin-right: 5px;
`;
