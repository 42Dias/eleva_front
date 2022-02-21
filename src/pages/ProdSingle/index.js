import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import luminariaSingle from './../../assets/luminariaSingle.png'
import * as S from './styled'

import productFind from '../../services/produto/productFind'
import { formatPrice } from '../../utils/format'

import getIdFromUrl from '../../utils/getIdFromUrl'

export default function ProdSingle() {
  const [produto, setProduto ] = useState({})
  
  async function loadProductData(){
    const id  = getIdFromUrl('#/produto/')
    let productData = await productFind(id)
  
    setProduto(productData)
  }

  useEffect(
    async () => {
      loadProductData()
    },[]
  )

  return (
    <>
      <Navbar />
      <S.ContainerProdSingle>
        <S.ProdImage>
          <h1>{produto.nome}</h1>
          <div className='border-helper'>
            <img src="https://wallpapercave.com/wp/wp9024378.jpg" alt='' />
            </div>


          <strong>{formatPrice(parseFloat(produto.precoVenda))}</strong>
        </S.ProdImage>

        <S.ProdDetailsSingle>
          <h2>Descrição do produto</h2>
          <p>
            {produto.descricao}
          </p>

          {/* terá botão de adicionar ao carrinho??????? */}

          <h2>categoria</h2> 
            <nav>
              <p>
                {produto.departamentoCategoria}
              </p>
            </nav>

            <h2>referência Tecnica</h2> 
            <p>
              {produto.referenciaTec}
            </p>


          <nav>
            {/* <ul>
              <li>Iluminação RGB Redragon Chroma Mk.II com 4 efeitos.</li>
              <li>
                Almofadas e revestimento interno do arco em tecido para
                proporcionar o máximo de conforto.
              </li>
              <li>
                Som estéreo e Surround 7.1 Virtual de alta qualidade pelos
                drivers de 53mm.
              </li>
              <li>
                Microfone com redução de ruído de fundo para captação clara e
                limpa.
              </li>
              <li>
                Controladora integrada para maior praticidade durante o uso.
              </li>
              <li>
                Compatível com software para ajustes e configurações
                personalizadas como equalização e controle de volume
                independente.
              </li>
            </ul> */}
            <Link to='/comprar/'>Voltar</Link>
          </nav>
        </S.ProdDetailsSingle>
      </S.ContainerProdSingle>
    </>
  )
}
