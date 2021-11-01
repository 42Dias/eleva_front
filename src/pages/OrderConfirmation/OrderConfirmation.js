import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import Accordion from '../../components/Accordion/Accordion'
import item from './../../assets/item.png'
import * as S from './styled'
import elo from './../../assets/elo.svg'
import mastercard from './../../assets/mastercard.svg'
import paypal from './../../assets/paypal.svg'
import visa from './../../assets/visa.svg'

export function OrderConfirmation() {
  return (
    <>
      <Navbar />
      <S.ContainerConfirmation>
        <S.StoreUserConfirmation>
          <p>Fornecedor: XXX</p>
          <p>Loja: XXXXX</p>
        </S.StoreUserConfirmation>
        <h2>Confirmação</h2>

        <S.GridConfirmation>
          <span>Código de barras</span>
          <span>Produto SKU</span>
          <span>Código</span>
          <span>Nome</span>
          <span>Status</span>
          <span>Quantidade</span>
        </S.GridConfirmation>
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

        <h3>Pagamento</h3>
        <S.BoxImage>
          <button>
            <img src={mastercard} alt='mastercard' />
          </button>
          <button>
            <img src={visa} alt='visa' />
          </button>
          <button>
            <img src={paypal} alt='paypal' />
          </button>
          <button>
            <img src={elo} alt='elo' />
          </button>
        </S.BoxImage>

        <S.ContentForm>
          <S.Payment>
            <label htmlFor='card-number'>Número do cartão</label>
            <input type='number' id='card-number' />
          </S.Payment>
        </S.ContentForm>

        <S.ContentForm>
          <S.Payment>
            <label htmlFor='data'>Data de validade</label>
            <input type='date' id='data' />
          </S.Payment>
        </S.ContentForm>

        <S.ContentForm>
          <S.Payment>
            <label htmlFor='cvv'>CVV</label>
            <input type='number' id='cvv' />
          </S.Payment>
          <Link to='/detalhes-da-venda'>Continuar</Link>
        </S.ContentForm>
      </S.ContainerConfirmation>
    </>
  )
}
