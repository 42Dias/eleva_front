import React, { useState ,useEffect, useRef, useCallback } from "react";
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
import axios from 'axios'
import { api, apiWithoutTenant, role } from '../../services/api'
import { useCart } from "../../hooks/useCart";
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import { formatPrice } from "../../utils/format";
import { toast } from "react-toastify";


export default function Buy() {

  
  useEffect(
    () => {
      
    }, []
  )
  
   const [number, setNumber] = useState(1)
  
   const { loading, products, hasMore } = useInfiniteScroll(number)
  
    useInfiniteScroll(number)
    
  
    const observer = useRef()
    const lastProdElementRef = useCallback(node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    }, [loading, hasMore])
  
  
  
    function handleAddProduct(id) {
    // addProduct(id);
    }
  

  return (
    <S.ContainerBuy>
      <Navbar />
      <S.BoxBuy>
        <img className='imageList' src={bannerList} />
        <S.ContainerPurchases>
          <S.BoxProd>
            <img src={IMAGE} alt='' />

            <h3>Nome do produto</h3>
            <p>PRODUTO ESTÁTICO!!!!</p>
            <span>R$ 219,99</span>
            <div className='btnContent'>
              <button>
                Salvar <BiLike color={'white'} />
              </button>
              <FiEye color={'05DEBD'} />
            </div>
          </S.BoxProd>

          {products.map((product, index) => {
        if(products.length === index + 1){
          return <>
              <S.BoxProd key={product.id} ref={lastProdElementRef} >
                <img src={IMAGE4} alt='' />

                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <span>{formatPrice(parseFloat(product.precoVenda))}</span>
                {/* custoUlmtimaCompra ou precoVenda? */}
                <div className='btnContent'>
                  <button
                  onClick={() => handleAddProduct(product.id)}
                  >
                    Salvar <BiLike color={'white'} />
                  </button>
                  <FiEye color={'05DEBD'} />
                </div>
              </S.BoxProd>
              </>
        }
        else{
          return<>
                <S.BoxProd key={product.id}>
                <img src={IMAGE4} alt='' />

                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <span>{formatPrice(parseFloat(product.precoVenda))}</span>
                <div className='btnContent'>
                  <button
                  onClick={() => handleAddProduct(product.id)}
                  >
                    Salvar <BiLike color={'white'} />
                  </button>
                  <FiEye color={'05DEBD'} />
                </div>
              </S.BoxProd>
              </>
                }
      })}

          {/* <S.BoxProd>
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
          </S.BoxProd> */}
        </S.ContainerPurchases>
      </S.BoxBuy>
    </S.ContainerBuy>
  )
}

