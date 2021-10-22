import React from 'react'
import { Link } from 'react-router-dom'
import { BUY } from '../../routes'
import IMAGE from '../../assets/imageinit.svg'
import Header from './../../components/Header'
import * as S from './styled'

export function MyProducts() {
  return (
    <S.ContainerLogin>
      <Header />
      <S.BoxImage>
        <img src={IMAGE} alt='imagem inicial' />
      </S.BoxImage>
      <S.Button>
        <Link to={BUY}>Comece a comprar</Link>
      </S.Button>
      <S.Footer>
        <p>© Copyright 2021 B2B Quick</p>
      </S.Footer>
    </S.ContainerLogin>
  )
}
