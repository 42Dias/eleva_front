import React from 'react'
import { Link } from 'react-router-dom'
import { FiLock, FiMoreHorizontal } from 'react-icons/fi'
import { MYPRODUCTS } from '../../routes'
import IMAGE from '../../assets/imagelogin.svg'
import LOGO from '../../assets/logo.png'
import * as S from './styled'

export function Login() {
  return (
    <S.ContainerLogin>
      <S.GridLogin>
        <S.BoxImage>
          <img src={IMAGE} alt='imagem de login' />
        </S.BoxImage>
        <S.BoxLogin>
          <img src={LOGO} alt='logo' />
          <S.Form method='post'>
            <h2>Bem vindo</h2>
            <label>Nome de usuário</label>
            <input type='text' />
            <label>Senha</label>
            <FiLock size={20} />
            <input type='password' />
            <Link to={MYPRODUCTS}>Entrar</Link>
          </S.Form>
          <S.ContentBorder>
            <S.Border />
            <p>ou</p>
            <S.Border />
          </S.ContentBorder>
          <Link>Criar uma conta</Link>
          <FiMoreHorizontal size={14} />
          <Link>Entrar como</Link>
        </S.BoxLogin>
      </S.GridLogin>
    </S.ContainerLogin>
  )
}
