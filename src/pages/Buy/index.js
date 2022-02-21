import { useState ,useEffect, useRef, useCallback } from "react";
import Modal from 'react-modal'
import { BiLike } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import IMAGE4 from '../../assets/prodItem4.png'
import bannerList from '../../assets/bannerList.png'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import { formatPrice } from "../../utils/format";
import { useSuprimento } from "../../hooks/useSuprimentos";
import { useCart } from "../../hooks/useCart";
import { FiX } from "react-icons/fi";

export default function Buy() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
  }

  const { addProduct, cart } = useSuprimento();
  // const { addProduct, cart } = useCart();
  
  
  useEffect(
    () => {
      // checkAuth()
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
      console.log(id)
      addProduct(id,  1);
    }

  return (
    <>
    <S.ContainerBuy>
      <Navbar />
      <S.BoxBuy>
        <img className='imageList' src={bannerList} />
        <S.ContainerPurchases>

          {products.map((product, index) => {
        if(products.length === index + 1){
          return <>
              <S.BoxProd key={product.id} ref={lastProdElementRef} >
                <Link to={`/produto/${product.id}`}>
                    <img src={IMAGE4} alt='' />
                </Link>
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <span>{formatPrice(parseFloat(product.precoVenda))}</span>
                {/* custoUlmtimaCompra ou precoVenda? */}
                <div className='btnContent'>
                  <button
                  // onClick={() => handleAddProduct(product.id)}
                  onClick={openModal}
                  >
                    Salvar <BiLike color={'white'} />
                  </button>
                </div>
              </S.BoxProd>
              </>
        }
        else{
          return<>
                <S.BoxProd key={product.id}>
                <Link to={`/produto/${product.id}`}>
                  <img src={IMAGE4} alt='' />
                </Link>
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <span>{formatPrice(parseFloat(product.precoVenda))}</span>
                <div className='btnContent'>
                  <button
                    // onClick={() => handleAddProduct(product.id)}
                    onClick={openModal}
                  >
                    Salvar <BiLike color={'white'} />
                  </button>
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
          <button>Salvar</button>
          <button style={{ marginLeft: '10px' }} onClick={closeModal}>Cancelar</button>
        </S.BtnsContent>
      </Modal>

    </>
  )
}

