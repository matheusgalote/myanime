import React, { useState } from 'react'
import styled from 'styled-components';
import Footer from '../Geral/Footer';
import background from '../img/anime.jpg';
import logo from '../img/logo.svg';
import Button from './Button';
import Input from './Input';

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(30rem, 38rem) 1fr;
  height: 100vh;
  background: #FEFBF6;
`;

const Content1 = styled.div`
  background: ${({ color }) => color };
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5% 30% 20% 20% 20% 1%;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: ${({ color }) => color };
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
  background: no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 5rem;

`;

const Login = () => {

  const [usuario, setUser] = useState(null);
  const [senha, setSenha] = useState(null);


  return (
    <Container>
      <Content1>
        <h1 style={{fontFamily: 'IBM Plex Sans', textAlign: 'center', margin: '1rem 0 0 0'}}>My Anime List</h1>
        <Logo src={logo} />
        <Form>
          <Input 
            type="text"
            label="Usuário" 
            name="usuario" 
            id="usuario" 
            value={usuario}
            setValue={setUser}  
          />
          <Input 
            type="password"
            label="Senha" 
            name="senha" 
            id="senha" 
            value={senha}
            setValue={setSenha}  
          />
          <Button title="Entrar" />
        </Form>
        <Footer/>
      </Content1>
      <Content color='#ccc'>
        <Image src={background}/>        
      </Content>
    </Container>
  )
}

export default Login