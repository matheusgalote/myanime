import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 2rem;
`;

const CustomLabel = styled.label`
  margin: 0.3rem;
  font-family: 'Teko';
  font-size: 2rem;
  color: aliceblue;
`;

const CustomInput = styled.input`
  display: block;
  margin: 0;
  border: 2px solid #ccc;
  width: 20rem;
  height: 2rem;
  border-radius: 5px;
  outline: none;
  background: #E7F6F2;
  transition: .1s;
  &:hover, &:focus {
    outline: none;
    border-color: #A5C9CA;
    box-shadow: 0 0 0 3px #395B64;
  }
`;


const Input = ({ type, label, name, id, value, setValue }) => {
  return (
    <InputContainer>
      <CustomLabel htmlFor={id}>{label}</CustomLabel>
      <CustomInput 
        type={type}
        id={id} 
        name={name} 
        value={value} 
        onChange={({target}) => setValue(target.value)} 
      />
    </InputContainer>
  )
}

export default Input