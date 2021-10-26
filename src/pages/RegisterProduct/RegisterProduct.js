import React from 'react'
import Navbar from '../../components/Sidebar/Sidebar'
// import Footer from './../../components/Footer'
import * as S from './styled'

export function RegisterProduct() {
  return (
    <S.ContainerLogin>
      <Navbar />
      <S.Content>
        <h1>Novo produto</h1>
      </S.Content>
    </S.ContainerLogin>
  )
}
