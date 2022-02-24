import React, { useEffect, useState } from "react";

import Modal from 'react-modal'
import { Link } from 'react-router-dom'
// FiFilter,
import { FiEdit, FiPlus, FiTrash, FiX } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import Accordion from '../../components/Accordion/Accordion'
import item from './../../assets/item.png'
import * as S from './styled'
import loadCart from "../../services/carrinho/loadCart";
import { formatPrice } from "../../utils/format";
import handleSetNumber from "../../utils/handleSetNumber";
import filterFornecedores from "../../utils/filterFornecedores";
import makeSumToCarrinho from "../../utils/makeSumToCarrinho";
import makeSumToFornecedor from "../../utils/makeSumToFornecedor";
import { AiOutlineConsoleSql } from "react-icons/ai";
import loadLista from '../../services/lista/loadLista'
import findLista from "../../services/lista/findLista";
import { useCart } from '../../hooks/useCart'
import getIdFromUrl from "../../utils/getIdFromUrl";
import createFatura from "../../services/fatura/createFatura";
import createPedido from "../../services/pedido/createPedido";
import deleteAllFromCart from "../../services/carrinho/deleteAllFromCart";
import { id } from "../../services/api";
import makeSumToFornecedorOfQuantidade from "../../utils/makeSumToFornecedorOfQuantidade";
import makeSumToFornecedorOfPeso from "../../utils/makeSumToFornecedorOfPeso";
import makeSumToFornecedorOfCubagem from "../../utils/makeSumToFornecedorOfCubagem";
import makeSumToFornecedorOfValorUnitario from "../../utils/makeSumToFornecedorOfValorUnitario";
import findUserProduto from "../../services/userProduto/findUserProduto";
import { DeleteButton } from "../../components/ButtonDelete/styled";
import deleteManyFromCart from "../../services/carrinho/deleteManyFromCart";

export default function BuyProds() {
  const { addProduct, removeProductFromCart } = useCart();

  const [modalIsOpen,             setIsOpen                   ] =  useState(false)
  const [modalIsOpen2,            setIsOpen2                  ] =  useState(false)
  const [modalIsOpen3, setIsOpen3                             ] =  useState(false)
  const [carrinho,                setCarrinho                 ] =  useState([])
  const [produtosDosFornecedores, setProdutosDosFornecedores  ] =  useState([])
  const [containerDeObjetos,     setContainerDeObjetos        ] =  useState([])
  const [fornecedoresNoCarrinho, setFornecedoresNoCarrinho    ] =  useState([])
  const [listas,                 setListas                    ] =  useState([])
  const [lista,                  setLista                     ] =  useState([])
  const [produtosCod,            setProdutosCod               ] =  useState([])
  const [valorTotal,             setValorTotal                ] =  useState(0)
  const [listaId,                setListaId                   ] =  useState("")
  const [id,                     setId                        ] =  useState("")



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

  function openModal3() {
    setIsOpen3(true)
  }

  function afterOpenModal3() {}

  function closeModal3() {
    setIsOpen3(false)
  }

  /*
    LISTAR 
    DELETAR
    EXCLUIR DA TELA
  */

  async function handleLoadCart(){
    let cartData =  await loadCart()
    let formatedCart = await filterFornecedores(cartData, setCarrinho)
    let sumFromCarrinho = makeSumToCarrinho(formatedCart)
    setValorTotal(sumFromCarrinho)

    
  }

  useEffect(
    () => {
      handleLoadCart()

      handleFindLista()

      handleLoadListas()
    }, []
  )

  const returnFunc = e => e

  async function findAndSetLista(id){

    let lista = await findLista(id)
      setLista(lista)
  }


  function handleFindLista(){
    let listaId = getIdFromUrl("#/comprar/")
    findAndSetLista(listaId)
  }

  async function handleLoadListas(){
    let listas = await loadLista()
      setListas(listas)
  }

  function handleChangeUrl(id){
    let cleanUrl = window.location.hash

    cleanUrl = `#/comprar/${id}`

    window.location.hash = cleanUrl

    findAndSetLista(id)
    closeModal2()
  }

  async function handlePushInCart(id, quantidade){
    await addProduct(id, quantidade);

    await handleLoadCart()

  }

  async function handleSubmitPedido(){
    carrinho.map(
      async (produtosNoCarrinho) => {    
        await createPedido({
            fornecedorId: produtosNoCarrinho.fornecedorId, 
            produtos: produtosNoCarrinho.produtos
          })
      }
      )
    closeModal()   
    await deleteAllFromCart(id)
    await handleLoadCart()
  }

  async function handleLoadProdutoCodigo(id){
    const prodsCod = await findUserProduto(id)
    console.log(prodsCod)
    setProdutosCod(prodsCod)
  }

  async function handleDeleteProdutosOfFornecedor(produtos){
    let ids = []

    produtos.map(
      produto => {
        console.log(produto)
        ids.push(produto.id)
      }
    )

    await deleteManyFromCart(ids)

    await handleLoadCart()
  }
  

  console.log("carrinho")
  console.log(carrinho )
  

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
          </div>
        </div>
        {
          lista.length == 0 ? (false) : (
           
          <S.GridValidation>
            <span>Cod. barras</span>
            <span>Produto SKU</span>
            <span>Código</span>
            <span>Nome</span>
            <span></span>
            <span>Quantidade</span>
      
          </S.GridValidation>

          )
        }
      {
        lista.map(
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
          leadtime={` ${item.produto.leadTime}`}
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
                  handlePushInCart(item.produto.id, item.quantidade)
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
        {
          lista.length != 0 ? (false) : (
            <h2 
            style={{
              textAlign: 'center'
            }}
            >
              Não há produtos nesta lista, selecione outra no botão Lista de Compras +
            </h2>

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
          carrinho.map(
              (fornecedor)  => (
              <div
              key={fornecedor.id}
              >
              <h4>
              {fornecedor.produtos[0].empresaNome}</h4>
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
                        <th>
                          <DeleteButton
                            onClick={(e) => handleDeleteProdutosOfFornecedor(fornecedor.produtos)}
                            >
                                <FiTrash/>
                          </DeleteButton>
                        </th>
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
                          <td>????????</td>
                          <td>
                            {carrinho.produto.descricao}
                          </td>
                          <td>
                            {formatPrice(Number(carrinho.produto.preco))}
                          </td>
                          <td>
                            {carrinho.quantidade}
                          </td>
                          <td>{(carrinho.produto.pesoLiq * carrinho.quantidade).toFixed(0)}g</td>
                          <td>{(carrinho.produto.cubagemEmbalagem * carrinho.quantidade).toFixed(0)}g</td>
                          <td>
                            {formatPrice(Number(carrinho.produto.preco) * carrinho.quantidade)}
                          </td>
                          <td
                            onClick={() => {
                              setId(carrinho.produto.id)
                              handleLoadProdutoCodigo(carrinho.produto.id)
                              }} 
                          >
                            <button>
                              <FiEdit onClick={() => {
                                openModal3()
                                }} />
                            </button>
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
                      <td>Tipo de frete: {fornecedor.produtos[0].empresaFrete} </td>
                      
                      {/* SISTEMA DE FRETE NÃO CALCULADO COM O CLIENTE!!!!! */}
                      {/* <td>Valor do frete?: R$14,65   </td> */}
                      <td></td>
                      <td>Valor unitario: 
                      {
                        formatPrice(
                          Number(
                            makeSumToFornecedorOfValorUnitario(fornecedor)
                          ))
                      } </td>
                      <td>Quantidade de produtos:  
                      {` ${Number(
                            makeSumToFornecedorOfQuantidade(fornecedor)
                          )
                        }`}
                      </td>
                      <td>
                        Peso total:
                         {` ${Number(
                            makeSumToFornecedorOfPeso(fornecedor)
                          )
                        }g`}
                      </td>
                      <td>Volume total:
                        {` ${Number(
                            makeSumToFornecedorOfCubagem(fornecedor)
                          )
                        }g`}         
                      </td>
                      <td>Valor total: 
                        <br/> 
                      {
                        formatPrice(
                          Number(
                            makeSumToFornecedor(fornecedor)
                          ))
                      }
                      </td>
                      <td></td>
                    </tr>
                </tbody>
              </table>
              }
            </div>
              )
            )
          }
          {
          carrinho.length != 0 ? (false) : (
            <h2>
              Não há produtos no carrinho
            </h2>

          )
        }        
        </S.Container>

        <S.BtnsContent>
          <span>
            {
              formatPrice(valorTotal)
            }
          </span>
          <div>
            <button>Salvar compra</button>
            <button
            onClick={() => handleSubmitPedido()}
            style={
              {
                marginLeft: '20px'
              }
            }
            >Finalizar compra</button>
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

          {/* 
          <button className='buttonSecondModal'>
            <h2>Essencial</h2>
            <p>Copos</p>
            <p>Sabonete</p>
            <p>Biscoitos</p>
            <p>Arroz</p>
            <p>Feijão</p>
          </button> 
          */}


          {
         listas.map(
            (lista) => (
            <button
            key={lista.id}
            className='buttonSecondModal'
            onClick={() => handleChangeUrl(lista.id)}
            >
              <h2>{lista.nome}</h2>
              <p>{lista.descricao}</p>
           </button>
            )
          )
          }


          <S.BtnsContent>
            <button>Comprar</button>
          </S.BtnsContent>
        </S.Container>
      </Modal>

      <Modal
        isOpen={modalIsOpen3}
        onAfterOpen={afterOpenModal3}
        onRequestClose={closeModal3}
        overlayClassName='react-modal-overlay'
        className='react-modal-content '
      >
        {/* Lista de fornecedores que possuem este produto?? */}
        {/* PROCURARIA PELO CÓDIGO INTERNO DO PRODUTO  */}
        {/* => QUE O CLIENTE ATRIBUIU A ELE             */}
        <S.Container>
          <button
            type='button'
            onClick={closeModal3}
            className='react-modal-close'
          >
            <FiX />
          </button>
          <h2>Lista de fornecedores</h2>
          {
          produtosCod.map(
            (produto) => (
              <button className='buttonSecondModal'>
                <h2>
                  {produto.nome}
                </h2>
                <p>Fornecedor: {produto.nomeFantasia}</p>
                <p>
                  Preço padrão:
                  {
                    formatPrice(Number(produto.precoVenda))
                  }
                </p>
                <p>
                   x Preço negociado: 
                   {
                     produto.precoNegociado ? formatPrice(Number(produto.precoNegociado)) : '  Não'
                   }
                </p>
                <h3>Total: 
                  {
                    produto.precoNegociado ? formatPrice(Number(produto.precoNegociado)) : formatPrice(Number(produto.precoVenda))
                  }
                </h3>
              </button>
            )
          )}

          <S.BtnsContent>
            
            <button>Trocar</button>

            {/*
            
            */}
          </S.BtnsContent>
        </S.Container>
      </Modal>
    </>
  )
}
