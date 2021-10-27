import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import Navbar from '../../components/Sidebar/Sidebar'
import Accordion from '../../components/Accordion/Accordion'
import item from './../../assets/item.png'
import * as S from './styled'

export function OrderConfirmation() {
  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        <S.StoreUserApprove>
          <p>Fornecedor: XXX</p>
          <p>Loja: XXXXX</p>
        </S.StoreUserApprove>
        <h2>Confirmação</h2>

        <S.GridValidation>
          <span>Código de barras</span>
          <span>Produto SKU</span>
          <span>Código</span>
          <span>Nome</span>
          <span>Status</span>
          <span>Quantidade</span>
        </S.GridValidation>
        <Accordion
          codeBarras='321312421321321'
          prodSku='Luminária'
          code='XXXXX'
          name='Luminária'
          approve='Aprovado'
          status='status-approve'
          amount='2 produtos'
          content={item}
          conteudo='prod 1'
          preco='R$40,00'
          informacoes='info do produto'
          icon={FaRegTrashAlt}
        />
        <Accordion
          codeBarras='321312421321321'
          prodSku='Luminária'
          code='XXXXX'
          name='Luminária'
          approve='Aguardando'
          status='status-await'
          amount='12 produtos'
          content={item}
          conteudo='prod 2'
          preco='R$40,00'
          informacoes='info do produto'
          icon={FaRegTrashAlt}
        />
        <Accordion
          codeBarras='321312421321321'
          prodSku='Luminária'
          code='XXXXX'
          name='Luminária'
          approve='Embalagem'
          status='status-packaging'
          amount='5 produtos'
          content={item}
          conteudo='prod 3'
          preco='R$40,00'
          informacoes='info do produto'
          icon={FaRegTrashAlt}
        />
        <p>
          Total: <strong>R$ 219,99</strong>
        </p>
      </S.ContainerApprove>
    </>
  )
}
