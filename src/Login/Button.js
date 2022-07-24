import React from 'react'
import styled from 'styled-components';

const CustomButton = styled.button`
  background: #92B4EC;
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
    outline: none;
    box-shadow: 0 0 0 2px #CDDEFF;
  }
`;

const Button = ({ title }) => {
  return (
    <CustomButton>{title}</CustomButton>
  )
}

export default Button