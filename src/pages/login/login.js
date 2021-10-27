import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { FiLock, FiMoreHorizontal } from 'react-icons/fi'
import { MYPRODUCTS } from '../../routes'
import IMAGE from '../../assets/imagelogin.svg'
import LOGO from '../../assets/logo.png'
import * as S from './styled'

export function Login() {
  AOS.init()
  return (
    <S.ContainerLogin>
      <S.GridLogin>
        <S.BoxImage>
          <img
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            src={IMAGE}
            alt='imagem de login'
          />
        </S.BoxImage>
        <S.BoxLogin>
          <img
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            src={LOGO}
            alt='logo'
          />
          <S.Form method='post'>
            <h2
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
            >
              Bem vindo
            </h2>
            <label
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
            >
              Nome de usuário
            </label>
            <input
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              type='text'
            />
            <label
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
            >
              Senha
            </label>
            <FiLock
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              size={20}
            />
            <input
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              type='password'
            />
            <Link
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              to={MYPRODUCTS}
            >
              Entrar
            </Link>
          </S.Form>
          <S.ContentBorder>
            <S.Border
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
            />
            <p
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
            >
              ou
            </p>
            <S.Border
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
            />
          </S.ContentBorder>
          <S.ContentCreateAccount
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            <Link to='/register'>Criar uma conta</Link>
            <FiMoreHorizontal size={14} />
            <Link to='/'>Entrar como</Link>
          </S.ContentCreateAccount>
        </S.BoxLogin>
      </S.GridLogin>
    </S.ContainerLogin>
  )
}
