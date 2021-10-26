import React from 'react'
import { FiPlus } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

export function Products() {
  return (
    <S.Container>
      <Navbar />
      <S.Content>
        <button>
          <FiPlus size={14} />
        </button>
        <h1>Meus Produtos</h1>
      </S.Content>
    </S.Container>
  )
}
