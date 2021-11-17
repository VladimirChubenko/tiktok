import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <HeaderWrapper>
      <NavLink to={'/'} >
        <img src={logo} alt="" className="logo" />
      </NavLink>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export default Header