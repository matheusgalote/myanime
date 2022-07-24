import React, { useState } from 'react'
import styled from 'styled-components';
import background from '../img/anime.jpg';
import logo from '../img/logo.svg';
import Button from './Button';
import Input from './Input';

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(30rem, 38rem) 1fr;
  height: 100vh;
  background: #2C3639;
`;

const Content1 = styled.div`
  background: ${({ color }) => color };
  display: flex;
  flex-direction: column;
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
  justify-content: center;
  margin-top: 2rem;
`;

const Logo = styled.img`
  display: block;
  width: 5rem;

`;

const Login = () => {

  const [usuario, setUser] = useState(null);
  const [senha, setSenha] = useState(null);


  return (
    <Container>
      <Content1>
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
      </Content1>
      <Content color='#ccc'>
        <Image src={background}/>        
      </Content>
    </Container>

  )
}

export default Login