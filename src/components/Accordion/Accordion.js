import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Chevron from './Chevron'

import './Accordion.css'
import productUpdate from '../../services/produto/productUpdate'
import producDelete from '../../services/produto/productDelete'

function Accordion(props) {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(setActive === 'active' ? '0px' : `120px`)
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate',
    )
  }

  return (
    <div className='accordion_section'>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p>{props.codeBarras}</p>
        <p>{props.prodSku}</p>
        <p>{props.code}</p>
        <p>{props.name}</p>
        <span className={props.status}>{props.approve}</span>
        <p>
        {  props.amount >= 0 ? (`${props.amount} Produtos`) : false}
          </p>
        <Chevron className={`${setRotate}`} width={10} fill={'#777'} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className='accordion_content'
      >
        <Link to='/produto-1'>
          <img src={props.content} style={{height: '120px'}} alt='' />
        </Link>
        <p>{props.conteudo}</p>
        <p>{props.preco}</p>
        <p>{props.informacoes}</p>
        <p>Lote minino:{props.lote}</p>
        <p>Informações do produto:{props.info}</p>
        <p>Preço da última venda:{props.lastprice}</p>
        <p>Quantidade por embalagem:{props.quantidadeporembalagem}</p>
        <p>Lead time: {props.leadtime}</p>
        <p>Data de faturamento:{props.datadefaturamento}</p>
        <button className={props.iconClass} onClick={()=> producDelete(props.produtoDelete)}>
          <img src={props.icon} alt='' />
        </button>
        <button className={props.iconAprove} onClick={()=> productUpdate(props.produtoUpdate)}>
          <img src={props.iconAproveImage} alt='' />
        </button>
        <span>{props.myProp}</span>
      </div>
    </div>
  )
}

export default Accordion
