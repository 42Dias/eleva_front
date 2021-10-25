import React from 'react'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

export function Products() {
  return (
    <S.Container>
      <Navbar />
      <S.Content>
        <h1>Meus Produtos</h1>
      </S.Content>
    </S.Container>
  )
}
