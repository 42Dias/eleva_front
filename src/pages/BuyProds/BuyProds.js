import React from 'react'
import Navbar from '../../components/Sidebar/Sidebar'
import Accordion from '../../components/Accordion/Accordion'
import item from './../../assets/item.png'
import * as S from './styled'

export function BuyProds() {
  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        <h2>Comprar</h2>

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
          lote=' 400'
          info=' 400'
          lastprice=' 400'
          quantidadeporembalagem=' 400'
          leadtime=' 400'
          datadefaturamento=' 400'
          myProp={
            <input
              type='number'
              id='quantity'
              name='quantity'
              min='1'
              max='9999999'
            />
          }
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
          lote='400'
          info='400'
          lastprice='400'
          quantidadeporembalagem='400'
          leadtime='400'
          datadefaturamento='400'
          myProp={
            <input
              type='number'
              id='quantity'
              name='quantity'
              min='1'
              max='9999999'
            />
          }
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
          lote='400'
          info='400'
          lastprice='400'
          quantidadeporembalagem='400'
          leadtime='400'
          datadefaturamento='400'
          myProp={
            <input
              type='number'
              id='quantity'
              name='quantity'
              min='1'
              max='9999999'
            />
          }
        />
      </S.ContainerApprove>
    </>
  )
}
