import React, { useEffect, useState } from "react";

import Modal from 'react-modal'
import { Link } from 'react-router-dom'
// FiFilter,
import { FiPlus, FiX } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import Accordion from '../../components/Accordion/Accordion'
import item from './../../assets/item.png'
import * as S from './styled'
import loadCart from "../../services/carrinho/loadCart";
import { formatPrice } from "../../utils/format";
import handleSetNumber from "../../utils/handleSetNumber";
import filterFornecedores from "../../utils/filterFornecedores";

export default function BuyProds() {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalIsOpen2, setIsOpen2] = React.useState(false)

  const [carrinho, setCarrinho] = React.useState([])
  const [produtosDosFornecedores, setProdutosDosFornecedores] = React.useState([])

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
  }

  function openModal2() {
    setIsOpen2(true)
  }

  function afterOpenModal2() {}

  function closeModal2() {
    setIsOpen2(false)
  }
  /*
  Aqui é o carrinho
  */

  /*
  LISTAR 
  DELETAR
  EXCLUIR DA TELA
  */

  /*
  
  NO TAB IR PARA O MODAL, FAZENDO O PUSH NO FORNECEDOR
  ele continua na tela!

  toast de finalizado!

  salvar compra adiciona na lista
  
  */

  async function handleLoadCart(){
    let cartData =  await loadCart()
    setCarrinho(cartData)
  }

  useEffect(
    () => {
      handleLoadCart()
    }, []
  )

  let returnFunc = (e) => e;


  function handlePushInForcedor(item){
    console.log(item)
    let produtosDosFornecedoresHelper = produtosDosFornecedores
    
    produtosDosFornecedoresHelper.push(item)

    filterFornecedores(produtosDosFornecedoresHelper, setProdutosDosFornecedores)
  }

  console.log(produtosDosFornecedores)

  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        <Link to='/listar-produtos' className='add'>
          <FiPlus size={22} />
        </Link>
        <div className='flex-title'>
          <h2>Comprar</h2>
          <div>
            <button onClick={openModal2}>Lista de compras +</button>
            <button onClick={openModal}>Finalizar compra</button>
            <button onClick={() => {
              console.log(carrinho)
            }}>AAAAAAAAAAAAAAAAA</button>
          </div>
        </div>

        <S.GridValidation>
          <span>Cod. barras</span>
          <span>Produto SKU</span>
          <span>Código</span>
          <span>Nome</span>
          <span>Status</span>
          <span>Quantidade</span>
        </S.GridValidation>
      {
        carrinho.map(
          (item, index) => (
          <Accordion
          key={index}
          codeBarras='321312421321321'
          prodSku='Mackbook'
          code={`${item.produto.codigo}`}
          name={`${item.produto.nome}`}
          amount={`${item.quantidade} `}
          content={item}
          lote={` ${item.produto.moduloMinimo}`} 
          info={` ${item.produto.descricao} `}
          lastprice={` ${formatPrice(item.produto.custoUltimaCompra)}`}
          quantidadeporembalagem={` ${item.produto.qtdEmbalagem} `}
          leadtime={`${item.produto.leadTime}`}
          datadefaturamento=' 400'
          myProp={
            <input
              onChange={(e) => {
                let stringNumber = e.target.value

                let formatedNumber = handleSetNumber(stringNumber, returnFunc)

                item.quantidade = formatedNumber
              }}

              onKeyDown={(e) => {
                if(e.key == 'Tab'){
                  console.log(item.quantidade)

                  handlePushInForcedor(item)



                }
              }}
              
              type='number'
              id='quantity'
              name='quantity'
              min='1'
              max='9999999'
            />
          }
        />
          )
        )
        }
        {/* <Accordion
          codeBarras='321312421321321'
          prodSku='Mackbook'
          code='XXXXX'
          name='Macbook Pro M1X'
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
        /> */}
      </S.ContainerApprove>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <S.Container>
          <button
            type='button'
            onClick={closeModal}
            className='react-modal-close'
          >
            <FiX />
          </button>
          {/* 
          
          NECESSIDADE: PUXAR MAIS DADOS DO FORNECEDOR!

          
          
          */}
          {
          produtosDosFornecedores.map(
              (fornecedor)  => (
              <div
              key={fornecedor.id}
              >
              <h4
              key={fornecedor.id}
              >
              Fornecedor 1</h4>
              {
                  <table
                  key={fornecedor.id}
                  >
                    <thead>
                      <tr className='firts'>
                        <th>Produto SKU</th>
                        <th>Descrição</th>
                        <th>Valor unitario</th>
                        <th>Quantidade</th>
                        <th>Peso</th>
                        <th>Volume</th>
                        <th>Valor</th>
                      </tr>
                    </thead>
                    <tbody className='body'>
                    {
                    fornecedor.produtos.map(
                    carrinho => (
                        <tr
                        key={
                          carrinho.id
                        }
                        >
                          <td>Macbook</td>
                          <td>
                            {carrinho.produto.descricao}
                          </td>
                          <td>
                            {formatPrice(Number(carrinho.produto.preco))}
                          </td>
                          <td>
                            {carrinho.quantidade}
                          </td>
                          <td>200g</td>
                          <td>100g</td>
                          <td>
                            {formatPrice(Number(carrinho.produto.preco) * carrinho.quantidade)}
                          </td>
                        </tr>
                      )
                    )}
                    <tr
                      style={{
                        background: '#05DEBD',
                        color: 'white',
                        width: '100vw',
                        borderRadius: '0px 0px 5px 5px',
                      }}
                    >
                      <td>Tipo de frete: FOB</td>
                      <td>Valor do frete: R$14,65</td>
                      <td>Peso total: 200g</td>
                      <td>Volume total: 100g</td>
                      <td>Quantidade de produtos: 15</td>
                      <td>Valor unitario: R$ 136,74</td>
                      <td>Valor total: R$ 136,74</td>
                    </tr>
                </tbody>
              </table>
              }
            </div>
              )
            )
          }

          {/*
          <h4>Fornecedor 2</h4>
          <table>
            <thead>
              <tr className='firts'>
                <th>Produto SKU</th>
                <th>Descrição</th>
                <th>Valor unitario</th>
                <th>Quantidade</th>
                <th>Peso</th>
                <th>Volume</th>
                <th>Valor</th>
              </tr>
            </thead>

            <tbody className='body'>
              <tr>
                <td>Macbook</td>
                <td>Notebook</td>
                <td>R$42,56</td>
                <td>Macbook Pro M1X</td>
                <td>200g</td>
                <td>100g</td>
                <td>R$122,87</td>
              </tr>
              <tr>
                <td>Macbook</td>
                <td>Notebook</td>
                <td>R$42,56</td>
                <td>Macbook Pro M1X</td>
                <td>200g</td>
                <td>100g</td>
                <td>R$122,87</td>
              </tr>
              <tr
                style={{
                  background: '#05DEBD',
                  color: 'white',
                  width: '100vw',
                  borderRadius: '0px 0px 5px 5px',
                }}
              >
                <td>Tipo de frete: FOB</td>
                <td>Valor do frete: R$14,65</td>
                <td>Peso total: 200g</td>
                <td>Volume total: 100g</td>
                <td>Quantidade de produtos: 15</td>
                <td>Valor unitario: R$ 136,74</td>
                <td>Valor total: R$ 136,74</td>
              </tr>
            </tbody>
          </table>
          */}
        
        </S.Container>

        <S.BtnsContent>
          <span>R$270,08</span>
          <div>
            <button>Salvar compra</button>
            <button>Finalizar compra</button>
          </div>
        </S.BtnsContent>
      </Modal>

      <Modal
        isOpen={modalIsOpen2}
        onAfterOpen={afterOpenModal2}
        onRequestClose={closeModal2}
        overlayClassName='react-modal-overlay'
        className='react-modal-content '
      >
        <S.Container>
          <button
            type='button'
            onClick={closeModal2}
            className='react-modal-close'
          >
            <FiX />
          </button>
          <h2>Lista de compras</h2>

          <button className='buttonSecondModal'>
            <h2>Essencial</h2>
            <p>Copos</p>
            <p>Sabonete</p>
            <p>Biscoitos</p>
            <p>Arroz</p>
            <p>Feijão</p>
          </button>

          <button className='buttonSecondModal'>
            <h2>Ingredientes</h2>
            <p>Arroz</p>
            <p>Feijão</p>
            <p>Sal</p>
            <p>Pimenta do reino</p>
            <p>Oregano</p>
            <p>Mostarda</p>
          </button>

          <S.BtnsContent>
            <button>Comprar</button>
          </S.BtnsContent>
        </S.Container>
      </Modal>
    </>
  )
}
