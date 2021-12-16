import React from 'react'
// import { FiPlus } from 'react-icons/fi'
import { BiLike } from 'react-icons/bi'
import { FiEye } from 'react-icons/fi'
import IMAGE from '../../assets/prodItem.png'
import IMAGE2 from '../../assets/prodItem2.png'
import IMAGE3 from '../../assets/prodItem3.png'
import IMAGE4 from '../../assets/prodItem4.png'
import bannerList from '../../assets/bannerList.png'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

export function Buy() {
  return (
    <S.ContainerBuy>
      <Navbar />
      <S.BoxBuy>
        <img className='imageList' src={bannerList} />
        <S.ContainerPurchases>
          <S.BoxProd>
            <img src={IMAGE} alt='' />

            <h3>Nome do produto</h3>
            <p>Descrição do produto com especificações técnicas</p>
            <span>R$ 219,99</span>
            <div className='btnContent'>
              <button>
                Salvar <BiLike color={'white'} />
              </button>
              <FiEye color={'05DEBD'} />
            </div>
          </S.BoxProd>

          <S.BoxProd>
            <img src={IMAGE2} alt='' />

            <h3>Nome do produto</h3>
            <p>Descrição do produto com especificações técnicas</p>
            <span>R$ 219,99</span>
            <div className='btnContent'>
              <button>
                Salvar <BiLike color={'white'} />
              </button>
              <FiEye color={'05DEBD'} />
            </div>
          </S.BoxProd>

          <S.BoxProd>
            <img src={IMAGE3} alt='' />

            <h3>Nome do produto</h3>
            <p>Descrição do produto com especificações técnicas</p>
            <span>R$ 219,99</span>
            <div className='btnContent'>
              <button>
                Salvar <BiLike color={'white'} />
              </button>
              <FiEye color={'05DEBD'} />
            </div>
          </S.BoxProd>

          <S.BoxProd>
            <img src={IMAGE4} alt='' />

            <h3>Nome do produto</h3>
            <p>Descrição do produto com especificações técnicas</p>
            <span>R$ 219,99</span>
            <div className='btnContent'>
              <button>
                Salvar <BiLike color={'white'} />
              </button>
              <FiEye color={'05DEBD'} />
            </div>
          </S.BoxProd>
        </S.ContainerPurchases>
      </S.BoxBuy>
    </S.ContainerBuy>
  )
}
