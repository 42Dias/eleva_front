import React from 'react'
import Navbar from '../../components/Sidebar/Sidebar'
import Accordion from '../../components/Accordion/Accordion'
import item from './../../assets/item.png'
import deleteIcon from './../../assets/delete.svg'
import * as S from './styled'

export default function ApproveOrders() {
  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        <S.StoreUserApprove>
          <p>Código: XXX</p>
          <p>Loja: XXXXX</p>
        </S.StoreUserApprove>
        <h2>Validação</h2>

        <S.GridValidation>
          <span>Cod. barras</span>
          <span>Produto SKU</span>
          <span>Código</span>
          <span>Nome</span>
          <span>Status</span>
          <span>Quantidade</span>
        </S.GridValidation>
        <Accordion
          codeBarras='321312421321321'
          prodSku='Mackbook'
          code='XXXXX'
          name='Macbook Pro M1X'
          approve='Aprovado'
          status='status-approve'
          amount='2 '
          content={item}
          conteudo='prod 1'
          preco='R$40,00'
          informacoes='info do produto'
          iconClass='btnDelete'
          icon={deleteIcon}
        />
        <Accordion
          codeBarras='321312421321321'
          prodSku='Mackbook'
          code='XXXXX'
          name='Macbook Pro M1X'
          approve='Aguardando'
          status='status-await'
          amount='12 '
          content={item}
          conteudo='prod 2'
          preco='R$40,00'
          informacoes='info do produto'
          iconClass='btnDelete'
          icon={deleteIcon}
        />
        <Accordion
          codeBarras='321312421321321'
          prodSku='Mackbook'
          code='XXXXX'
          name='Macbook Pro M1X'
          approve='Embalagem'
          status='status-packaging'
          amount='5 '
          content={item}
          conteudo='prod 3'
          preco='R$40,00'
          informacoes='info do produto'
          iconClass='btnDelete'
          icon={deleteIcon}
        />
      </S.ContainerApprove>
    </>
  )
}
