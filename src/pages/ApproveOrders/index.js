import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Sidebar/Sidebar'
import Accordion from '../../components/Accordion/Accordion'
import item from '../../assets/sem_imagem.png'
import deleteIcon from './../../assets/delete.svg'
import aproveIcon from './../../assets/iconAprove.svg'
import * as S from './styled'
import productFindPendente from '../../services/produto/productFindPendente'
import { role } from '../../services/api'

export default function ApproveOrders() {
  const [produtos, setProdutos] = useState([])
  /*  
  Listar os pedidos da empresa
  MESMO DA CONSTAL -> ADMIN: TODOS, EMPRESA: DELA
  */
  async function loadProdutos() {
    let prod = await productFindPendente(role)
    setProdutos(prod.rows)
    console.log(produtos)
  }
  async function approve(id, userData) {
    console.log(id)
    console.log("approve")
    let newUserData = {
      data: {
        ...userData,
        ativo: 'Ativo'
      }
    }
    console.log(newUserData)
    // await changeEmpresa(id, newUserData)
    // console.log(userData.email)
    // await handleSendEmail(userData.email)

    loadProdutos()
  }

  async function disapprove(id, userData) {
    console.log(id)
    console.log("disapprove")
    let newUserData = {
      data: {
        ...userData,
        ativo: 'Ativo'
      }
    }
    //await changeEmpresa(id, newUserData)
    // await handleSendEmail(newUserData.email)
    loadProdutos()
  }
  useEffect(() => {

    loadProdutos()
  }, []
  )

  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        {/* <S.StoreUserApprove>
          <p>Código: XXX</p>
          <p>Loja: XXXXX</p>
        </S.StoreUserApprove> */}
        <h2>Aprovar Produtos</h2>

        <S.GridValidation>
          <span>Cod. barras</span>
          {/* <span>Produto SKU</span> */}
          <span>Código</span>
          <span>Nome</span>
          {/* <span>Status</span> */}
          <span>Quantidade</span>
        </S.GridValidation>
        {/* <Accordion
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
        /> */}
        {produtos.length > 0 ?
          produtos.map((produto) =>
            <Accordion
              codeBarras={produto.codigoDeBarras}
              prodSku={'falta'}
              code={produto.codigo}
              name={produto.nome}
              amount={produto.estoque}
              content={produto.image ? produto.image : item}
              preco={'R$ ' + produto.precoVenda}
              lote={produto.estoqueMinimo}
              quantidadeporembalagem={produto.qtdEmbalagem}
              leadtime={produto.leadTime}
              iconClass='btnDelete'
              icon={deleteIcon}
              iconAprove='btnAprove'
              iconAproveImage={aproveIcon}
            />
          ) : "Nenhum produto esperando por aprovação!"}
      </S.ContainerApprove>
    </>
  )
}
