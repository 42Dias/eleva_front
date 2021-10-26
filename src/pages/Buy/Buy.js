import React from 'react'
import { FiPlus } from 'react-icons/fi'
import IMAGE from '../../assets/material.png'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

export function Buy() {
  return (
    <S.ContainerBuy>
      <Navbar />
      <S.BoxBuy>
        <S.ContainerPurchases>
          <S.Items>
            <img src={IMAGE} alt='exemplo de produto' />
            <h3>Titulo do produto</h3>
            <p>Descrição do produto com especificações técnicas</p>
            <strong>R$ 219,99</strong>
            <button>
              <FiPlus size={14} />
            </button>
          </S.Items>
          <S.Items>
            <img src={IMAGE} alt='exemplo de produto' />
            <h3>Titulo do produto</h3>
            <p>Descrição do produto com especificações técnicas</p>
            <strong>R$ 219,99</strong>
            <button>
              <FiPlus size={14} />
            </button>
          </S.Items>
          <S.Items>
            <img src={IMAGE} alt='exemplo de produto' />
            <h3>Titulo do produto</h3>
            <p>Descrição do produto com especificações técnicas</p>
            <strong>R$ 219,99</strong>
            <button>
              <FiPlus size={14} />
            </button>
          </S.Items>
        </S.ContainerPurchases>
      </S.BoxBuy>
    </S.ContainerBuy>
  )
}
