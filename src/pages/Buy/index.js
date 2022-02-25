import { useState ,useEffect, useRef, useCallback } from "react";
import Modal from 'react-modal'
import { BiLike } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import IMAGE4 from '../../assets/sem_imagem.png'
import bannerList from '../../assets/bannerList.png'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import { formatPrice } from "../../utils/format";
import { useSuprimento } from "../../hooks/useSuprimentos";
import { useCart } from "../../hooks/useCart";
import { FiX } from "react-icons/fi";
import cadastrarUserProduto from "../../services/userProduto/cadastrarUserProduto";

export default function Buy() {
  const [modalIsOpen, setIsOpen] = useState(false)
  
  const [id, setId] = useState('')

  const [codigoSalvar, setCodigoSalvar] = useState('')
  const [produtoSKUSalvar, setProdutoSKUSalvar] = useState('')


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
  
    async function handleAddProduct(id) {
      console.log(id)
      
      let body = {
        codigo:     codigoSalvar    ,
        produtoSKU: produtoSKUSalvar,
        produtoId: id
      }
      
      closeModal()
      
      await cadastrarUserProduto(body)
      
      await addProduct(id,  1);

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
                    <img src={product.image ? product.image :IMAGE4} alt='' />
                </Link>
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <span>{product.precoVendaNegociada}</span>

                <span>{formatPrice(parseFloat(product.precoVendaNegociado || product.precoVenda))}</span>

                {/* custoUlmtimaCompra ou precoVenda? */}
                <div className='btnContent'>
                  <button
                  onClick={openModal}
                  >
                    Salvar <BiLike color={'white'} />
                  </button>
                </div>
              </S.BoxProd>
              </>
            }
            else {
              return <>
                <S.BoxProd key={product.id}>
                <Link to={`/produto/${product.id}`}>
                  <img src={product.image ? product.image :IMAGE4} alt='' />
                </Link>
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <span>{formatPrice(parseFloat(product.precoVendaNegociado || product.precoVenda))}</span>
                <div className='btnContent'>
                  <button
                    onClick={() => {
                      openModal()
                      setId(product.id)
                    }}
                  >
                    Salvar <BiLike color={'white'} />
                  </button>
                </div>
              </S.BoxProd>
              </>
            }
          })}
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
            <label htmlFor=''>Código</label>
            <input onChange={(e) => setCodigoSalvar(e.target.value)} type='text' placeholder='Código' />
          </div>
          <div>
            <label htmlFor=''>Produto SKU</label>
            <input onChange={(e) => setProdutoSKUSalvar(e.target.value)} type='text' placeholder='Produto SKU' />
          </div>
          {/*           
          <div>
            <label htmlFor=''>Nome do produto x</label>
            <input type='text' placeholder='Nome do produto' />
          </div>
          <div>
            <label htmlFor=''>Descrição x </label>
            <input type='text' placeholder='Descrição' />
          </div>
          <div>
            <label htmlFor=''>Produto compra</label>
            <input type='text' placeholder='Produto compra' />
          </div>
          <div>
            <label htmlFor=''>Produto venda</label>
            <input type='text' placeholder='Produto venda' />
          </div>
          <div>
            <label htmlFor=''>Categoria</label>
            <input type='text' placeholder='Categoria' />
          </div>
          <div>
            <label htmlFor=''>Preço</label>
            <input type='text' placeholder='Preço' />
          </div> */}
        </S.Container>

        <S.BtnsContent>
          <button onClick={closeModal}>Cancelar</button>
          <button style={{ marginLeft: '10px' }}  onClick={() => handleAddProduct(id)}>Salvar</button>
        </S.BtnsContent>
      </Modal>

    </>
  )
}

