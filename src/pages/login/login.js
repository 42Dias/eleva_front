import React from 'react'
import { Link } from 'react-router-dom'
import { FiLock } from 'react-icons/fi'
import { MYPRODUCTS } from '../../routes'
import IMAGE from '../../assets/imagelogin.svg'
import * as S from './styled'

export function Login() {
  return (
    <S.ContainerLogin>
      <S.GridLogin>
        <S.BoxImage>
          <img src={IMAGE} alt='imagem de login' />
        </S.BoxImage>
        <S.BoxLogin>
          <S.Form method='post'>
            <h2>Bem vindo</h2>
            <label>Nome de usuário</label>
            <input type='text' />
            <label>Senha</label>
            <FiLock />
            <input type='password' />
            <Link to={MYPRODUCTS}>Entrar</Link>
            <Link>Criar conta</Link>
          </S.Form>
        </S.BoxLogin>
      </S.GridLogin>
    </S.ContainerLogin>
  )
}
