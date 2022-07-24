import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 0.7rem;
  &:focus-within {
    transform: scale(1.05, 1.05);
  }
`;

const CustomLabel = styled.label`
  margin: 0 0 0.5rem 0;
  font-family: 'Teko';
  font-size: 2rem;
  display: block;
  color: #aaa;
  opacity: 1;
  transform: translateY(-1.25em);
  transform-origin: 0 0;
  transition: all .3s;
`;

const CustomInput = styled.input`
  display: block;
  margin: 0;
  width: 20rem;
  height: 2rem;
  outline: none;
  transition: .1s;
  background: none;
  border-style: none none solid none;
  &:hover, &:focus {
    box-shadow: none;
    outline: none;
    border-color: #92B4EC;
  }
  &::placeholder {
    color: transparent;
  }
`;


const Input = ({ type, label, name, id, value, setValue }) => {
  return (
    <InputContainer className="form">
      <CustomInput 
        className='input'
        type={type}
        id={id} 
        name={name} 
        value={value} 
        onChange={({target}) => setValue(target.value)} 
        placeholder="Username"
      />
      <CustomLabel htmlFor={id} className="label">{label}</CustomLabel>
    </InputContainer>
  )
}

export default Input