import React from 'react'

import { Switch } from 'antd'
import { FiFilter, FiPlus, FiX } from 'react-icons/fi'
import Modal from 'react-modal'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import 'antd/dist/antd.css'

export function Supplies() {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <Navbar />
      <S.ContainerDetails>
        <button className='add'>
          <FiPlus size={22} />
        </button>

        <div className='flex-title'>
          <h2>Suprimentos</h2>
          <div>
            <button>Comprar 🤑</button>
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
            <tr>
              <td>123123412</td>
              <td>Macbook </td>
              <td>XXXXX</td>
              <td>Macbook Pro M1X</td>
              {/* <td>400</td> */}
              <Switch
                // checkedChildren='adcionar'
                // unCheckedChildren='adicionado'
                checkedChildren='Adicionado'
                unCheckedChildren='Adicionar'
              />
            </tr>
            <tr>
              <td>123123412</td>
              <td>Macbook </td>
              <td>XXXXX</td>
              <td>Macbook Pro M1X</td>
              {/* <td>400</td> */}
              <Switch
                checkedChildren='Adicionado'
                unCheckedChildren='Adicionar'
              />
            </tr>
            <tr>
              <td>123123412</td>
              <td>Macbook </td>
              <td>XXXXX</td>
              <td>Macbook Pro M1X</td>
              {/* <td>400</td> */}
              <Switch
                checkedChildren='Adicionado'
                unCheckedChildren='Adicionar'
              />
            </tr>
            <tr>
              <td>123123412</td>
              <td>Macbook </td>
              <td>XXXXX</td>
              <td>Macbook Pro M1X</td>
              {/* <td>400</td> */}
              <Switch
                checkedChildren='Adicionado'
                unCheckedChildren='Adicionar'
              />
            </tr>
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
          <div>
            <label htmlFor=''>Referência técnica</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Tipo de material</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Data de inatividade</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Categoria</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
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
          </div>
          <div>
            <label htmlFor=''>Marca</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Entrega mínima</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Pedido mínimo (Quant/Valor)</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Preço</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Altura (cm)</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Comprimento (cm)</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
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
          </div>

          <div>
            <label htmlFor=''>Rede SKU</label>
            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Sim</label>
            </div>

            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Não</label>
            </div>
          </div>

          <div>
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
          </div>

          <div>
            <label htmlFor=''>Origem do produto</label>
            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Nacional</label>
            </div>

            <div style={{ display: 'flex' }}>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Importado</label>
            </div>
          </div>

          <div>
            <label htmlFor=''>Lead time</label>
            <input type='text' placeholder='oi' />
          </div>

          <div>
            <label htmlFor=''>Descrição NCM</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Produto SKU</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Código de barras</label>
            <input type='text' placeholder='oi' />
          </div>
          <div>
            <label htmlFor=''>Unidade de medida</label>
            <input type='text' placeholder='oi' />
          </div>
        </S.Container>

        <S.BtnsContent>
          <button>Cancelar</button>
          <button>Salvar</button>
        </S.BtnsContent>
      </Modal>
    </>
  )
}
