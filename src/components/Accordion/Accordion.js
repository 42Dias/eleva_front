import React, { useState, useRef } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import Chevron from './Chevron'

import './Accordion.css'

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
        <p>{props.amount}</p>
        <Chevron className={`${setRotate}`} width={10} fill={'#777'} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className='accordion_content'
      >
        <img src={props.content} alt='' />
        <p>{props.conteudo}</p>
        <p>{props.preco}</p>
        <p>{props.informacoes}</p>
        <p>{props.name}</p>
        <a className='btnDelete'>
          <FaRegTrashAlt />
        </a>
      </div>
    </div>
  )
}

export default Accordion
