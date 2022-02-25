import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import IMAGE from '../../assets/luminaria.png'
import * as S from './styled'
import getIdFromUrl from '../../utils/getIdFromUrl'
import pedidoFindWithProductToEmpresaSingle from '../../services/pedido/pedidoFindWithProductToEmpresaSingle'

export  default  function SaleDetails() {

  const [modalIsOpen,             setIsOpen                    ] =  useState(false)
  const [pedido,                  setPedido                    ] =  useState([])

  async function handlePedidoList(){
    // id = userId got from localStorage
    const userPedidos = await pedidoFindWithProductToEmpresaSingle(id)
    console.log(userPedidos)
    setPedido(userPedidos)
  }

  
  useEffect(
    () => {
      const vendaId = getIdFromUrl('#/detalhes-da-venda/')
      console.log(vendaId)

    }
  )

  return (
    <>
      <Navbar />
      <S.ContainerDetails>
        <h1>Detalhes da venda</h1>
        <Link className='back' to='/meus-pedidos'>
          <FiChevronLeft size={18} />
        </Link>

        <S.Content>
          <S.Product>
            <img src={IMAGE} alt='image product' />
            <ul>
              <p>pedido.produto.nome</p>
              <li>Quantidade: 2</li>
            </ul>
          </S.Product>
        </S.Content>

        <S.Content>
          <S.Product>
            <ul>
              <p>Nome do comprador</p>
              <li>Rede: XXXX</li>
              <li>E-mail: pedido.user.email</li>
              <li>Telefone: (XX) XXXXX-XXXX</li>
            </ul>
          </S.Product>
        </S.Content>

        <S.Content>
          <S.Product>
            <ul>
              <p>Status</p>
              <li>Data para entrega: 00/00/0000</li>
              <li>
                Armazem do produto: Logradouro, Número, Bairros, Cidade, Estado
              </li>
              <li>
                Endereço de entrega: Logradouro, Número, Bairros, Cidade, Estado
              </li>
            </ul>
          </S.Product>
        </S.Content>

        <S.Content>
          <S.Product>
            <ul>
              <p>Contato do fornecedor</p>
              <li>Telefone: (XX) XXXXX-XXXX</li>
              <li>E-mail: email@email.com</li>
              <li>WhatsApp: (XX) XXXXX-XXXX</li>
            </ul>
          </S.Product>
        </S.Content>

        <S.Content>
          <S.Product>
            <ul>
              <p>Detalhes</p>
              <li>
                Data da compra: <strong>00/00/0000</strong>
              </li>
              <li>
                Produto: <strong>R$ 00,00</strong>
              </li>
              <li>
                Envio: <strong>R$ 00,00</strong>
              </li>
              <li>Forma de pagamento: XXXXX</li>
              <li>Data para faturamento: 00/00/0000</li>
              <li>
                Total: <strong>R$ 00,00 </strong>
              </li>
              <li>Sem juros</li>
            </ul>
          </S.Product>
        </S.Content>
      </S.ContainerDetails>
    </>
  )
}
