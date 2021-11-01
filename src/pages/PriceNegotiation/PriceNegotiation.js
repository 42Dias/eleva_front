import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

export function PriceNegotiation() {
  return (
    <>
      <Navbar />
      <S.ContainerRegisterSupplier>
        <S.RegisterSupplier>
          <h2>Preço negociado</h2>
          <S.ContentSupplierForm>
            <S.Price>
              <label htmlFor='supplying-company'>Empresa Fornecedora</label>
              <input type='text' id='supplying-company' />
            </S.Price>

            <S.Price>
              <label htmlFor='buyer-company'>Empresa Compradora</label>
              <input type='text' id='buyer-company' />
            </S.Price>

            <S.Price>
              <label htmlFor='product'>Produto</label>
              <input type='text' id='product' />
            </S.Price>

            <S.Price>
              <label htmlFor='unit-value'>Valor Unitário</label>
              <input type='text' id='unit-value' />
            </S.Price>

            <S.Price>
              <label htmlFor='freight'>Tipo de frete</label>
              <input type='text' id='freight' />
            </S.Price>
          </S.ContentSupplierForm>
          <Link to='/home'>Salvar</Link>
          <Link to='/home' style={{ background: '#AA2323' }}>
            Cancelar
          </Link>
        </S.RegisterSupplier>
      </S.ContainerRegisterSupplier>
    </>
  )
}
