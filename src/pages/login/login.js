import React from 'react'
import { Link } from 'react-router-dom'
import { MYPRODUCTS } from '../../routes'
import { Teste } from './styled'

export function Login() {
  return (
    <Teste>
      <h1>Bem vindo</h1>
      <Link to={MYPRODUCTS}>Navegar</Link>
    </Teste>
  )
}
