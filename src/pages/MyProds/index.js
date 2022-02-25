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

import IntlCurrencyInput from "react-intl-currency-input"
import InputMask from 'react-input-mask';
import cadastrarProduct from "../../services/produto/cadastrarProduct";
import currencyConfig from '../../utils/currenryConfig'

export default function MyProds() {
  const [modalIsOpen, setIsOpen] = useState(false)
  
  const [id, setId] = useState('')

  const [produtos, setProdutos] = useState([])

  const [categorias, setcategorias] = useState([])
  const [medidas, setMedidas] = useState([])
  const [tipoMateriais, settipoMateriais] = useState([])
  const [curvaTipos, setcurvaTipos] = useState([])
  const [codigo, setcodigo] = useState('')
  const [codigoDeBarras, setCodigoDeBarras] = useState('')
  const [nome, setnome] = useState('')
  const [descricao, setdescricao] = useState('')
  const [unidadeMedida, setunidadeMedida] = useState('')
  const [tipoMaterial, settipoMaterial] = useState('')
  const [precoVenda, setprecoVenda] = useState('')
  const [referenciaTec, setreferenciaTec] = useState('')
  const [demandaDiaria, setdemandaDiaria] = useState('')
  const [estoque, setestoque] = useState('')
  const [estoqueFornecedor, setestoqueFornecedor] = useState('')
  const [leadTime, setleadTime] = useState('')
  const [ativo, setativo] = useState('')
  const [dataInatividade, setdataInatividade] = useState('')
  const [redeSKU, setredeSKU] = useState('')
  const [isSKU, setIsSKU] = useState('')
  const [pedidoMinimo, setpedidoMinimo] = useState('')
  const [entregaMinima, setentregaMinima] = useState('')
  const [qtdEmbalagem, setqtdEmbalagem] = useState('')
  const [moduloMinimo, setmoduloMinimo] = useState('')
  const [moduloMaster, setmoduloMaster] = useState('')
  const [comprimento_cm, setcomprimento_cm] = useState('')
  const [largura_cm, setlargura_cm] = useState('')
  const [altura_cm, setaltura_cm] = useState('')
  const [cubagemEmbalagem, setcubagemEmbalagem] = useState('')
  const [pesoLiq, setpesoLiq] = useState('')
  const [pesoBruto, setpesoBruto] = useState('')
  const [estoqueMinimo, setestoqueMinimo] = useState('')
  const [estoqueMaximo, setestoqueMaximo] = useState('')
  const [curva, setcurva] = useState('')
  const [mediaDeVendaA, setmediaDeVendaA] = useState('')
  const [mediaDeVendaB, setmediaDeVendaB] = useState('')
  const [dtUltimaVenda, setdtUltimaVenda] = useState('')
  const [departamentoCategoria, setdepartamentoCategoria] = useState('')
  const [ncm, setncm] = useState('')
  const [descricaoNCM, setdescricaoNCM] = useState('')
  const [marca, setmarca] = useState('')
  const [custoUltimaCompra, setcustoUltimaCompra] = useState('')
  const [dataPrimeiraVenda, setdataPrimeiraVenda] = useState('')
  const [statusProduto, setstatusProduto] = useState('')
  const [origem, setorigem] = useState('')
  const [departamentoId, setdepartamentoId] = useState('')
  const [empresaId, setempresaId] = useState('')
  const [priceFormated, setPriceFormated] = useState('')
  const [preco, setPreco] = useState('')
  const [image, setImage] = useState(IMAGE4)

  const [codigoSalvar, setCodigoSalvar] = useState('')
  const [produtoSKUSalvar, setProdutoSKUSalvar] = useState('')


  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
  }
  
  const handleChangePrice = (event, value, maskedValue) => {
    event.preventDefault();

    setPreco(value); // value without mask (ex: 1234.56)
    setPriceFormated(maskedValue); // masked value (ex: R$1234,56)
  };


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

          {produtos.map((product, index) => {
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

