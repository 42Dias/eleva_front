import React, { useEffect, useState } from 'react'

import { Switch } from 'antd'
import { FiFilter, FiX } from 'react-icons/fi'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import 'antd/dist/antd.css'
import loadSuprimento from '../../services/suprimento/loadSuprimento'

import ButtonDelete from '../../components/ButtonDelete'
import { useSuprimento } from '../../hooks/useSuprimentos'

import { useCart } from '../../hooks/useCart'

export  default function Supplies() {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [suprimentos, setSuprimentos] = useState([])
  function openModal() {
    setIsOpen(true)
  }
  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
  }

  /*
  Verifico e escolho os item que será comprado
  prática e rápida

  duas tabelas =!  
  
  a plataforma vasculha o melhor preço com o sku
  */

 const { addProduct, removeProductFromCart } = useCart();
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


  async function handleAddProductInCart(productId, index, quantidade, status) {
    if(status == true){
      await addProductSuprimentoInCart(productId, quantidade , status, addProduct );
      handleLoadSuprimentos()
    }
    else{
      await addProductSuprimentoInCart(productId, quantidade , status, removeProductFromCart );
      handleLoadSuprimentos()
    }
  }

  useEffect(
    () => {
      handleLoadSuprimentos()
    }, []
  )


  
  return (
    <>
      <Navbar />
      <S.ContainerDetails>
        <div className='flex-title'>
          <h2 style={{ position: 'relative', top: '15px' }}>Suprimentos</h2>
          <div>
            <Link to='/listar-produtos'>Comprar 🤑</Link>
            <button
              onClick={openModal}
              style={{ position: 'relative', top: '3px' }}
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
                      }>
                        <ButtonDelete
                        />
                      </div>
                      {
                      Boolean(suprimento.status) == true ? (
                        <Switch
                        defaultChecked
                        checkedChildren='Adicionado'
                        unCheckedChildren='Adicionar'
                        onClick={
                          () => {
                            handleAddProductInCart(suprimento.produto.id, index, suprimento.quantidade, false)
                          }
                        }
                         />
                      ) : (

                        <Switch
                          checkedChildren='Adicionado'
                          unCheckedChildren='Adicionar'
                          onClick={
                            () => {
                              handleAddProductInCart(suprimento.produto.id, index, suprimento.quantidade, true)
                            }
                          }
                        />
                      )
                      }
                      {/* <button
                      type='button'
                      >
                        aaaaa
                      </button> */}
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
            <input type='text' placeholder='oi' />
          </div>

          <div>
            <label htmlFor=''>Código</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Descrição</label>
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
            <input type='text' placeholder='oi' />
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
            <input type='text' placeholder='oi' />
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
            <input type='text' placeholder='oi' />
          </div>
          {/* <div>
            <label htmlFor=''>Código de barras</label>
            <input type='text' placeholder='oi' />
          </div> */}
          {/* <div>
            <label htmlFor=''>Unidade de medida</label>
            <input type='text' placeholder='oi' />
          </div> */}
        </S.Container>

        <S.BtnsContent>
          <button>Cancelar</button>
          <button>Salvar</button>
        </S.BtnsContent>
      </Modal>
    </>
  )
}
