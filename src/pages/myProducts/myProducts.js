import React from 'react'
import { Link } from 'react-router-dom'
import IMAGE from '../../assets/imageinit.svg'
import Navbar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer'
import * as S from './styled'

export function MyProducts() {
  return (
    <S.ContainerLogin>
      <Navbar />
      <S.BoxImage>
        <img src={IMAGE} alt='imagem inicial' />
      </S.BoxImage>
      <S.Button>
        <Link to='/comprar'>Comece a comprar</Link>
      </S.Button>
      <Footer />
    </S.ContainerLogin>
  )
}
