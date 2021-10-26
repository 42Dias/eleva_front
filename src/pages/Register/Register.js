import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/logo.png'
import * as S from './styled'

export function Register() {
  return (
    <>
      <S.ContainerRegister>
        <S.ContentRegister>
          <img src={LOGO} alt='' />
          <h2>Cadastre-se</h2>

          <S.FormRegister>
            <label htmlFor='nome'>Nome</label>
            <input type='text' id='nome' placeholder='Nome' />
            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' placeholder='E-mail' />
            <label htmlFor='senha'>Senha</label>
            <input type='password' id='senha' placeholder='Senha' />
            <div className='checkbox'>
              <input type='checkbox' name='' id='' />
              <p>
                Aceito os <Link to='/aceitar-termos'>Termos e condições</Link> e
                autorizo o uso de meus dados de acordo com a Declaração de
                privacidade.
              </p>
            </div>
            <Link className='link' to='/myproducts'>
              Criar conta
            </Link>
          </S.FormRegister>
        </S.ContentRegister>
      </S.ContainerRegister>
    </>
  )
}
