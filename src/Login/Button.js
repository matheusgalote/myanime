import React from 'react'
import styled from 'styled-components';

const CustomButton = styled.button`
  background: #5B4B8A;
  border: none;
  border-radius: 3px;
  font-family: 'IBM Plex Sans';
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  color: aliceblue;
  padding: 3px 10px;
  transition: .1s;
  &:hover, &:focus {
    background: #4C3575;
    outline: none;
  }
`;

const Button = ({ title }) => {
  return (
    <CustomButton>{title}</CustomButton>
  )
}

export default Button