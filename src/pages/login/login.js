import React from 'react'
import { Link } from 'react-router-dom'
import { MYPRODUCTS } from '../../routes'
import * as S from './styled'

export function Login() {
  return (
    <S.ContainerLogin>
      <h1>Bem vindo</h1>
      <Link to={MYPRODUCTS}>Navegar</Link>
    </S.ContainerLogin>
  )
}
