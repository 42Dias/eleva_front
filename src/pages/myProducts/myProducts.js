import React from 'react'
import { Link } from 'react-router-dom'
import { BUY } from '../../routes'
import IMAGE from '../../assets/imageinit.svg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import * as S from './styled'

export function MyProducts() {
  return (
    <>
      <Header />
      <S.Content>
        <S.ContainerLogin>
          <S.BoxImage>
            <img src={IMAGE} alt='imagem inicial' />
          </S.BoxImage>
          <S.Button>
            <Link to={BUY}>Comece a comprar</Link>
          </S.Button>
        </S.ContainerLogin>
        <Footer />
      </S.Content>
    </>
  )
}
