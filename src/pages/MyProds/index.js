import { useState ,useEffect } from "react";
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import IMAGE4 from '../../assets/sem_imagem.png'
import bannerList from '../../assets/bannerList.png'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import { formatPrice } from "../../utils/format";
import { FiX } from "react-icons/fi";
import cadastrarUserProduto from "../../services/userProduto/cadastrarUserProduto";
import ButtonDelete from "../../components/ButtonDelete";
import ChangeBtn from "../../components/ChangeBtn";

export default function MyProds() {
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


  useEffect(
    () => {

      

    }, []
  )
  

  return (
    <>
    <S.ContainerBuy>
      <Navbar />
      <S.BoxBuy>
        <img className='imageList' src={bannerList} />
        <S.ContainerPurchases>

          {products.map((product, index) => {
              return <>
                <S.BoxProd key={product.id}>
                <Link to={`/produto/${product.id}`}>
                  <img src={product.image ? product.image : IMAGE4} alt='' />
                </Link>
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <span>{formatPrice(parseFloat(product.precoVenda))}</span>
                <S.ContainerButtons>
                  <ButtonDelete/>
                  <ChangeBtn />
                </S.ContainerButtons>
              </S.BoxProd>
              </>
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
        </S.Container>

        <S.BtnsContent>
          <button onClick={closeModal}>Cancelar</button>
          <button style={{ marginLeft: '10px' }}  onClick={() => handleAddProduct(id)}>Salvar</button>
        </S.BtnsContent>
      </Modal>

    </>
  )
}

