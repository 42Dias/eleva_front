import React from 'react'
import { FaHistory, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

export function MyRequests() {
  return (
    <>
      <Navbar />
      <S.ContainerMyRequests>
        <h1>Compras</h1>
        <Link className='history'>
          <FaHistory />
        </Link>

        <S.GridMyRequest>
          <span>Cod. barras</span>
          <span>Produto SKU</span>
          <span>Código</span>
          <span>Fornecedor</span>
          <span>Status</span>
        </S.GridMyRequest>

        <S.PedidosContainer>
          <p>321312421321321</p>
          <p>Macbook </p>
          <p>XXXXX</p>
          <p>XXXXXXX</p>
          <p className='status-approve'>Aprovado</p>
          <S.ContentIconsPedidos>
            <Link to='/detalhes-da-venda' className='eye'>
              <FaEye />
            </Link>
          </S.ContentIconsPedidos>
        </S.PedidosContainer>

        <S.PedidosContainer>
          <p>321312421321321</p>
          <p>Macbook </p>
          <p>XXXXX</p>
          <p>XXXXXXX</p>
          <p className='status-packaging'>Embalagem</p>
          <S.ContentIconsPedidos>
            <Link to='/detalhes-da-venda' className='eye'>
              <FaEye />
            </Link>
          </S.ContentIconsPedidos>
        </S.PedidosContainer>

        <S.PedidosContainer>
          <p>321312421321321</p>
          <p>Macbook </p>
          <p>XXXXX</p>
          <p>XXXXXXX</p>
          <p className='status-await'>Esperando</p>
          <S.ContentIconsPedidos>
            <Link to='/detalhes-da-venda' className='eye'>
              <FaEye />
            </Link>
          </S.ContentIconsPedidos>
        </S.PedidosContainer>
      </S.ContainerMyRequests>
    </>
  )
}
