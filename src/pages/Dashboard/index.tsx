import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste" >
          <img
            src="https://avatars1.githubusercontent.com/u/37077860?s=460&u=f51546b77ac8f04254de5373a7c9a3fd3b537fc3&v=4"
            alt="Mayara Alencar"
          />
          <div>
            <strong>rockeseat/unform</strong>
            <p>Easy peasy highly scalable</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>)
};

export default Dashboard;
