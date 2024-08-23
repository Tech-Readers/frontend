// src/pages/anuncios/AtualizarAnuncio.jsx:
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getExchangeById, updateExchange } from '../../services/exchangeService';
import Footer from '../../components/footer/footer';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  ImageUpload,
  SubmitButton
} from './CriarAnuncio.styled';

const AtualizarAnuncio = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    titulo: '',
    titulo_livro_oferecido: '',
    autor_livro_oferecido: '',
    genero_livro_oferecido: '',
    titulo_livro_solicitado: '',
    autor_livro_solicitado: '',
    genero_livro_solicitado: '',
    descricao: '',
    anunciante_id: '',
    imagem: null,
  });
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const anuncio = await getExchangeById(id); // token  é obtido internamente
        setFormData({
          titulo: anuncio.titulo,
          titulo_livro_oferecido: anuncio.titulo_livro_oferecido,
          autor_livro_oferecido: anuncio.autor_livro_oferecido,
          genero_livro_oferecido: anuncio.genero_livro_oferecido,
          titulo_livro_solicitado: anuncio.titulo_livro_solicitado,
          autor_livro_solicitado: anuncio.autor_livro_solicitado,
          genero_livro_solicitado: anuncio.genero_livro_solicitado,
          descricao: anuncio.descricao,
          anunciante_id: anuncio.anunciante_id,
          imagem: null, 
        });
      } catch (error) {
        console.error('Erro ao carregar os dados do anúncio:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, imagem: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSubmit = new FormData();

      for (const key in formData) {
        formDataToSubmit.append(key, formData[key]);
      }

      await updateExchange(id, formDataToSubmit); // token é obtido internamente
      history.push('/'); // redirecionar para a página principal
    } catch (error) {
      console.error('Erro ao atualizar o anúncio:', error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Título do anúncio:</Label>
          <Input
            type="text"
            name="titulo"
            placeholder="Insira o título do anúncio."
            value={formData.titulo}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Título do livro oferecido:</Label>
          <Input
            type="text"
            name="titulo_livro_oferecido"
            placeholder="Insira o título do livro oferecido."
            value={formData.titulo_livro_oferecido}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Autor oferecido:</Label>
          <Input
            type="text"
            name="autor_livro_oferecido"
            placeholder="Insira o nome do autor do livro oferecido."
            value={formData.autor_livro_oferecido}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Gênero oferecido:</Label>
          <Input
            type="text"
            name="genero_livro_oferecido"
            placeholder="Insira o gênero do livro oferecido."
            value={formData.genero_livro_oferecido}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Título do livro solicitado:</Label>
          <Input
            type="text"
            name="titulo_livro_solicitado"
            placeholder="Insira o título do livro solicitado."
            value={formData.titulo_livro_solicitado}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Autor solicitado:</Label>
          <Input
            type="text"
            name="autor_livro_solicitado"
            placeholder="Insira o nome do autor do livro solicitado."
            value={formData.autor_livro_solicitado}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Gênero solicitado:</Label>
          <Input
            type="text"
            name="genero_livro_solicitado"
            placeholder="Insira o gênero do livro solicitado."
            value={formData.genero_livro_solicitado}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Descrição:</Label>
          <TextArea
            name="descricao"
            placeholder="Descreva seu livro para o próximo leitor"
            value={formData.descricao}
            onChange={handleInputChange}
          />
        </FormGroup>

        <ImageUpload>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </ImageUpload>

        <SubmitButton type="submit">Salvar</SubmitButton>
      </Form>

      <Footer /> {/* Adicionando o Footer como componente */}
    </Container>
  );
};

export default AtualizarAnuncio;
