import React from 'react'
import Navbar from '../../components/Sidebar/Sidebar'
// import Footer from './../../components/Footer'
import IMAGE from '../../assets/upload.png'
import * as S from './styled'

export function RegisterProduct() {
  return (
    <S.ContainerLogin>
      <Navbar />
      <h1>Novo produto</h1>
      <S.BoxImage>
        <img src={IMAGE} alt='upload image' />
      </S.BoxImage>
      <S.Content>
        <form className='form'>
          <label htmlFor='name'>Nome do produto</label>
          <S.Input id='name' type='text' placeholder='Nome do produto' />
          <label htmlFor='code'>Código</label>
          <S.Input id='code' type='text' placeholder='Código do produto' />
          <label htmlFor='description'>Descrição</label>
          <S.Input
            id='description'
            type='text'
            placeholder='Descrição do produto'
          />
          <label htmlFor='ref'>Referência técnica</label>
          <S.Input id='ref' type='text' placeholder='Referência do produto' />
          <label>Rede SKU</label>
          <S.Input id='yes' type='radio' />
          <label htmlFor='yes'>Sim</label>
          <S.Input id='no' type='radio' />
          <label htmlFor='no'>Não</label>
        </form>
      </S.Content>
    </S.ContainerLogin>
  )
}
