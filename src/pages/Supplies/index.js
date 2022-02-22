import React, { useEffect, useState } from 'react'

import { Switch } from 'antd'
import { FiFilter, FiX } from 'react-icons/fi'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import 'antd/dist/antd.css'
import loadSuprimento from '../../services/suprimento/loadSuprimento'

import loadLista from '../../services/lista/loadLista'

import ButtonDelete from '../../components/ButtonDelete'
import { useSuprimento } from '../../hooks/useSuprimentos'

import createLista from '../../services/lista/createLista'

import { FaPlus, FaShoppingCart } from 'react-icons/fa'
import addManyInLista from '../../services/lista/addManyInLista'

export  default function Supplies() {
  const [modalIsOpen,  setIsOpen]   =  useState(false)
  const [modalIsOpen2, setIsOpen2]   =  useState(false)
  const [modalIsOpen3, setIsOpen3]   =  useState(false)
  const [modalIsOpen4, setIsOpen4]   =  useState(false)
  const [suprimentos,  setSuprimentos ]   =  useState([])
  const [listas,       setListas      ]   =  useState([])
  const [newListaName, setNewListaName]   =  useState("")
  const [newListaDesc, setNewListaDesc]   =  useState("")
  const [lista,        setLista       ]   =  useState("")

  const [listaParaAdd, setListaParaAdd]   =  useState([])


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

  function openModal4() {
    setIsOpen4(true)
  }

  function afterOpenModal4() {}

  function closeModal4() {
    setIsOpen4(false)
  }

  /*
  Verifico e escolho os item que será comprado
  prática e rápida

  duas tabelas =!  
  
  a plataforma vasculha o melhor preço com o sku
  */


 const { removeProduct, addProductSuprimentoInCart } = useSuprimento();


  function handleRemoveProduct(productId, index) {
    removeProduct(productId);
    
    let newSuprimentoList = [...suprimentos]
    newSuprimentoList.splice(index, 1)
    setSuprimentos(newSuprimentoList)
    
  }

  async function handleLoadSuprimentos(){
    let suprimentos = await loadSuprimento()
      console.log(suprimentos)
      setSuprimentos(suprimentos)
  }

  async function handleLoadListas(){
    let listas = await loadLista()
      console.log("listas")
      console.log(listas)
      setListas(listas)
  }

  async function handleCreateList(listaName , listaDesc){
    await createLista(listaName , listaDesc)
    closeModal3()
    handleLoadListas()
  }


  // async function handleAddProductInCart(productId, index, quantidade, status) {
  //   if(status == true){
  //     await addProductSuprimentoInCart(productId, quantidade , status, addProduct );
  //     handleLoadSuprimentos()
  //   }
  //   else{
  //     await addProductSuprimentoInCart(productId, quantidade , status, removeProductFromCart );
  //     handleLoadSuprimentos()
  //   }
  // }

  
  function handleAddProductInList(index, productId){
    console.log("handleAddProductInList")
    let listaHelper = listaParaAdd

    listaHelper.push(productId)

    setListaParaAdd(listaHelper)
  }
  
  function handleRemoveProductInList(index, productId){

    console.log("handleRemoveProductInList")

    let listaHelper = listaParaAdd
    
    listaParaAdd.filter(
      (produto, index) => {
        produto == productId ? listaHelper.splice(index, 1) : false
      }
      )
      
    setListaParaAdd(listaHelper)
  }

  useEffect(
    () => {

      handleLoadSuprimentos()

      handleLoadListas()
    
    }, []
  )

  async function handleAddInLista(lista){
    console.log("lista")
    console.log(lista)
    await addManyInLista(lista, listaParaAdd)
  }

  return (
    <>
      <Navbar />
      <S.ContainerDetails>
        <Link to="/listar-produtos" className='add'>
          <FaPlus />
        </Link>
        <div className='flex-title'>
          <h2 style={{ position: 'relative', top: '15px' }}>Suprimentos</h2>
          <div>
            <button className='btnList'onClick={openModal4}>Listas de compras</button>
            <button
              onClick={openModal}
              style={{ position: 'relative', top: '2px' }}
            >
              <FiFilter size={22} />
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr className='firts'>
              <th>Cod. barras</th>
              <th>Produto SKU</th>
              <th>Código</th>
              <th>Nome</th>
              <th>Armazem</th>
            </tr>
          </thead>

          <tbody className='body'>
            {/*
             <tr>
              <td>123123412</td>
              <td>Macbook </td>
              <td>XXXXX</td>
              <td>Macbook Pro M1X</td>
              <Switch
                defaultChecked
                checkedChildren='Adicionado'
                unCheckedChildren='Adicionar'
              />
            </tr>
            */}
            {
            suprimentos.map(
              (suprimento, index) => (
                <tr
                key={index}
                >
                  <td>123123412</td>
                  <td>Macbook </td>
                  <td>{suprimento.produto.codigo}</td>
                  <td>{suprimento.produto.nome}</td>
                  <td>
                    <S.FlexContainer>
                      <div
                        className='deleteBtn'
                        onClick={
                          () => {
                            console.log(suprimento)
                            handleRemoveProduct(suprimento.produto.id, index)
                          }
                        }
                      >
                        <ButtonDelete />
                      </div>
                      

                      <Switch
                      checkedChildren='Adicionado'
                      unCheckedChildren='Adicionar'
                      onClick={
                        (e) => {
                          if(e == true ){
                            handleAddProductInList(index, suprimento.produto.id)
                          }
                          else{
                            handleRemoveProductInList(index, suprimento.produto.id)
                          }
                        }
                      }
                        />

                    </S.FlexContainer>
                  </td>
                </tr>
              )
            )
            }
          </tbody>
        </table>
      </S.ContainerDetails>

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

          <div>
            <label htmlFor=''>Nome do produto</label>
            <input type='text' placeholder='Nome do produto' />
          </div>
          <div>
            <label htmlFor=''>Código</label>
            <input type='text' placeholder='Código' />
          </div>
          <div>
            <label htmlFor=''>Descrição</label>
            <input type='text' placeholder='Descrição' />
          </div>
          <div>
            <label htmlFor=''>Categoria</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Produto SKU</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Preço</label>
            <input type='text' placeholder='oi' />
          </div>
          {/* <div>
            <label htmlFor=''>Referência técnica</label>
            <input type='text' placeholder='oi' />
          </div> */}
          {/* <div>
            <label htmlFor=''>Tipo de material</label>
            <input type='text' placeholder='oi' />
          </div> */}
          {/* <div>
            <label htmlFor=''>Data de inatividade</label>
            <input type='text' placeholder='oi' />
          </div> */}
          <div>
            <label htmlFor=''>Categoria</label>
            <input type='text' placeholder='Categoria' />
          </div>
          {/* <div>
            <label htmlFor=''>Quantia em estoque</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Demanda</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Estoque de segurança</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Estoque máximo</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Modulo mínimo</label>
            <input type='text' placeholder='oi' />
          </div> */}
          {/* <div>
            <label htmlFor=''>Marca</label>
            <input type='text' placeholder='oi' />
          </div> */}
          {/* <div>
            <label htmlFor=''>Entrega mínima</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Pedido mínimo (Quant/Valor)</label>
            <input type='text' placeholder='oi' />
          </div> */}
          <div>
            <label htmlFor=''>Preço</label>
            <input type='text' placeholder='Preço' />
          </div>
          {/* <div>
            <label htmlFor=''>Altura (cm)</label>
            <input type='text' placeholder='oi' />
          </div> */}
          {/* <div>
            <label htmlFor=''>Comprimento (cm)</label>
            <input type='text' placeholder='oi' />
          </div> */}
          {/* <div>
            <label htmlFor=''>Cubagem da embalagem</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Largura(cm)</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Peso bruto(g)</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Peso líquido(g)</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Data da última venda</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Data da primeira venda</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>NCM</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Descrição NCM</label>
            <input type='text' placeholder='oi' />
          </div> */}

          {/* <div>
            <label htmlFor=''>Rede SKU</label>
            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Sim</label>
            </div>

            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Não</label>
            </div>
          </div> */}

          {/* <div>
            <label htmlFor=''>Status de atividade</label>
            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Ativo</label>
            </div>

            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Inativo</label>
            </div>

            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Pesquisa</label>
            </div>
          </div> */}

          {/* <div>
            <label htmlFor=''>Origem do produto</label>
            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Nacional</label>
            </div>

            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Importado</label>
            </div>
          </div> */}
          {/* <div>
            <label htmlFor=''>Lead time</label>
            <input type='text' placeholder='oi' />
          </div> */}
          {/* <div>
            <label htmlFor=''>Descrição NCM</label>
            <input type='text' placeholder='oi' />
          </div> */}
          <div>
            <label htmlFor=''>Produto SKU</label>
            <input type='text' placeholder='Produto SKU' />
          </div>
          {/* <div>
            <label htmlFor=''>Código de barras</label>
            <input type='text' placeholder='oi' />
          </div> */}
          {/* <div>
            <label htmlFor=''>Unidade de medida</label>
            <input type='text' placeholder='oi' />
          </div> */}
          <div>
            <label htmlFor=''>Produto compra</label>
            <input type='text' placeholder='Produto compra' />
          </div>
          <div>
            <label htmlFor=''>Produto venda</label>
            <input type='text' placeholder='Produto venda' />
          </div>
        </S.Container>

        <S.BtnsContent>
          <button>Cancelar</button>
          <button style={{ marginLeft: '10px' }}>Salvar</button>
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
          <h2>Listas de compras</h2>

          <button className='buttonSecondModal'>
            {/* <Link to="/comprar/">
              <h2>Essencial</h2>
              <p>Descrição da lista</p>
            </Link> */}
          </button>

          {/* <button className='buttonSecondModal'>
            <Link to="/comprar/">
              <h2>Ingredientes</h2>
              <p>Descrição  da lista</p>
            </Link>
          </button> */}

          <S.BtnsContent>
            <button>Adicionar à lista</button>
          </S.BtnsContent>
        </S.Container>
      </Modal>

      {/* <Switch
        defaultChecked
        checkedChildren='Adicionado'
        unCheckedChildren='Adicionar'
        onClick={openModal4}
      /> */}

      <Modal
        isOpen={modalIsOpen4}
        onAfterOpen={afterOpenModal4}
        onRequestClose={closeModal4}
        overlayClassName='react-modal-overlay'
        className='react-modal-content '
      >
        <S.Container>
          <button
            type='button'
            onClick={closeModal4}
            className='react-modal-close'
          >
            <FiX />
          </button>
          <h2>Listas de compras</h2>

          <button onClick={openModal3} className='add'>
            <FaPlus />
          </button>

          {/* <button className='buttonSecondModal'>
            <h2>Essencial</h2>
            <p>Descrição da lista</p>
          </button> */}

         {
         listas.map(
            (lista) => (
            <button
            key={lista.id}
            className='buttonSecondModal'
            onClick={() => setLista(lista)
            }
            >
              <div 
              // to="/comprar/"
              >
                <h2>{lista.nome}</h2>
                <p>{lista.descricao}</p>
              </div>
           </button>
            )
          )
          }

          <S.BtnsContent>
            <button
            onClick={() => handleAddInLista(lista)}
            >Adicionar à lista</button>
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
        <S.Container
        onSubmit={
          e => {
            e.preventDefault()
            e.target.reset()
            handleCreateList(newListaName ,newListaDesc)
          }
        }
        >
          <button
            type='button'
            onClick={closeModal3}
            className='react-modal-close'
          >
            <FiX />
          </button>

          <h2>Criar lista</h2>
          
          <div>
            <input    
            type="text"
            name=""
            id=""
            placeholder="Nome da lista" 
            required
            onChange={(e) => setNewListaName(e.target.value)}
            />
            
            <textarea 
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Descrição da lista"
            required
            onChange={(e) => setNewListaDesc(e.target.value)}
            />

          </div>
          <S.BtnsContent>
            <button
            type='submit'
            >Adicionar à lista</button>
          </S.BtnsContent>
        </S.Container>
      </Modal>
    </>
  )
}
