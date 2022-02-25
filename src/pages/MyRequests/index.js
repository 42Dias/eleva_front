import React, { useEffect, useState } from 'react'
import { FaHistory, FaEye, FaUmbraco } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import { id } from '../../services/api'
import pedidoFindWithProductToEmpresaSingle from '../../services/pedido/pedidoFindWithProductToEmpresaSingle'
import * as S from './styled'

export default function MyRequests() {

  const [modalIsOpen,             setIsOpen                    ] =  useState(false)
  const [pedidos,                 setPedidos                   ] =  useState([])


  async function handlePedidoList(){
    // id = userId got from localStorage
    const userPedidos = await pedidoFindWithProductToEmpresaSingle(id)
    console.log(userPedidos)
    setPedidos(userPedidos)
  }
/*
seu cnpj -> produto específico
caso for cnpj de rede -> todos os da rede

produto, empresaCompr, empresaVend


*/
  

  useEffect(
    () => {
      handlePedidoList()
    }, []
  )


  return (
    <>
      <Navbar />
      <S.ContainerMyRequests>
        <h1>Pedidos</h1>
        <Link className='history'>
          <FaHistory />
        </Link>

        <S.GridMyRequestTop>
          <span>Enviados</span>
          <Link to='/recebidos'>Recebidos</Link>
          <Link className='history-icon' to='/historico-de-pedidos'>Historico <FaHistory /></Link>
        </S.GridMyRequestTop>

      {
      pedidos.length == 0 ? (false) : (
        <S.GridMyRequest>
          <span>Cod. barras</span>
          <span>Produto SKU</span>
          <span>Código</span>
          <span>Fornecedor</span>
          <span>Status</span>
        </S.GridMyRequest>
      )
    }

      {pedidos.map(
        (pedido) => (
          <S.PedidosContainer>
            <p>{pedido.id}</p>
            <p>Macbook </p>
            <p>321312421321321</p>
            <p>XXXXXXX</p>
            <p className='status-approve'>Aprovado</p>
            <S.ContentIconsPedidos>
              <Link to={`/detalhes-da-venda/${pedido.id}`} className='eye'>
                <FaEye />
              </Link>
            </S.ContentIconsPedidos>
          </S.PedidosContainer>
        )
      ) 
      }

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
