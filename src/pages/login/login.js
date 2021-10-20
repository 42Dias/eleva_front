import React from 'react'
import { Link } from 'react-router-dom'
import { MYPRODUCTS } from '../../routes'
import image from '../../assets/imagelogin.svg'
import * as S from './styled'

export function Login() {
  return (
    <S.ContainerLogin>
      <S.GridLogin>
        <S.BoxImage>
          <img src={image} alt='imagem de login' />
        </S.BoxImage>
        <S.BoxLogin>
          <S.Form method='post'>
            <h2>Bem vindo</h2>
          </S.Form>
          <Link to={MYPRODUCTS}>Entrar</Link>
        </S.BoxLogin>
      </S.GridLogin>
    </S.ContainerLogin>
  )
}
