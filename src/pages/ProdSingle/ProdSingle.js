import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import luminariaSingle from './../../assets/luminariaSingle.png'
import * as S from './styled'

export function ProdSingle() {
  return (
    <>
      <Navbar />
      <S.ContainerProdSingle>
        <S.ProdImage>
          <h1>Luminária</h1>
          <img src={luminariaSingle} alt='' />
          <strong>R$ 339,90</strong>
        </S.ProdImage>

        <S.ProdDetailsSingle>
          <h2>Descrição do produto</h2>
          <p>
            Headset Gamer Redragon Zeus X, USB, RGB Chroma Mk.II, Surround 7.1,
            Drivers 53mm, Preto/Vermelho
          </p>

          <h3>Recursos:</h3>

          <nav>
            <ul>
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
            </ul>

            <Link to='/comprar'>Voltar</Link>
          </nav>
        </S.ProdDetailsSingle>
      </S.ContainerProdSingle>
    </>
  )
}
