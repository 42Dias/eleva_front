import React from 'react'
import { FaArrowLeft, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

export function History() {
  return (
    <>
      <Navbar />
      <S.ContainerHistory>
        <h1>Histórico</h1>
        <Link to='/home' className='backIcon'>
          <FaArrowLeft />
        </Link>

        <S.GridHistory>
          <span>Cod. barras</span>
          <span>Produto SKU</span>
          <span>Código</span>
          <span>Fornecedor</span>
          <span>Status</span>
        </S.GridHistory>

        <S.HistoryContent>
          <p>321312421321321</p>
          <p>Macbook </p>
          <p>XXXXX</p>
          <p>XXXXXXX</p>
          <p className='status-approve'>Em trânsito</p>
          <S.ContentIconsHistory>
            <Link to='/detalhes-da-venda' className='eye'>
              <FaEye />
            </Link>
          </S.ContentIconsHistory>
        </S.HistoryContent>

        <S.HistoryContent>
          <p>321312421321321</p>
          <p>Macbook </p>
          <p>XXXXX</p>
          <p>XXXXXXX</p>
          <p className='status-packaging'>Despachado</p>
          <S.ContentIconsHistory>
            <Link to='/detalhes-da-venda' className='eye'>
              <FaEye />
            </Link>
          </S.ContentIconsHistory>
        </S.HistoryContent>

        <S.HistoryContent>
          <p>321312421321321</p>
          <p>Macbook </p>
          <p>XXXXX</p>
          <p>XXXXXXX</p>
          <p className='status-await'>Em aberto</p>
          <S.ContentIconsHistory>
            <Link to='/detalhes-da-venda' className='eye'>
              <FaEye />
            </Link>
          </S.ContentIconsHistory>
        </S.HistoryContent>

        <S.HistoryContent>
          <p>321312421321321</p>
          <p>Macbook </p>
          <p>XXXXX</p>
          <p>XXXXXXX</p>
          <p className='status-approve'>Finalizado</p>
          <S.ContentIconsHistory>
            <Link to='/detalhes-da-venda' className='eye'>
              <FaEye />
            </Link>
          </S.ContentIconsHistory>
        </S.HistoryContent>

        <S.HistoryContent>
          <p>321312421321321</p>
          <p>Macbook </p>
          <p>XXXXX</p>
          <p>XXXXXXX</p>
          <p className='status-approve'>Confirmado</p>
          <S.ContentIconsHistory>
            <Link to='/detalhes-da-venda' className='eye'>
              <FaEye />
            </Link>
          </S.ContentIconsHistory>
        </S.HistoryContent>

        <S.HistoryContent>
          <p>321312421321321</p>
          <p>Macbook </p>
          <p>XXXXX</p>
          <p>XXXXXXX</p>
          <p className='status-await'>Aguardando</p>
          <S.ContentIconsHistory>
            <Link to='/detalhes-da-venda' className='eye'>
              <FaEye />
            </Link>
          </S.ContentIconsHistory>
        </S.HistoryContent>

        <S.HistoryContent>
          <p>321312421321321</p>
          <p>Macbook </p>
          <p>XXXXX</p>
          <p>XXXXXXX</p>
          <p className='status-packaging'>Embalagem</p>
          <S.ContentIconsHistory>
            <Link to='/detalhes-da-venda' className='eye'>
              <FaEye />
            </Link>
          </S.ContentIconsHistory>
        </S.HistoryContent>
      </S.ContainerHistory>
    </>
  )
}
