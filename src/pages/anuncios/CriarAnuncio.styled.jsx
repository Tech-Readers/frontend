import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.Branco};
  border-radius: 10px;
  padding: 30px;
  width: 60%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.Preto};
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.CinzaTres};
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.CinzaTres};
  resize: none;
`;

export const ImageUpload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.CinzaTres};
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin: 0 auto 20px;
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.VerdeMedioDois};
  color: ${({ theme }) => theme.colors.Branco};
  padding: 15px 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.VerdeEscuro};
  }
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.BeigeUm};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.CinzaCinco};
  font-family: 'Inter', sans-serif;
`;
