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

import productFindWithFilter from "../../services/produto/productFindWithFilter";

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

  async function handleLoadProdutos(){
    let filter = 'empresa';
    let filterValue = empresaId;
    const prods = await productFindWithFilter(filter, filterValue)
    console.log(prods)
    setProdutos(prods)
  }

  function handleSetProdutoFields(index){
    let prodSelected = produtos[index]

    setcodigo(prodSelected.codigo)
    setCodigoDeBarras(prodSelected.codigoDeBarras)
    setnome(prodSelected.nome)
    setdescricao(prodSelected.descricao)
    setunidadeMedida(prodSelected.unidadeMedida)
    settipoMaterial(prodSelected.tipoMaterial)
    setprecoVenda(prodSelected.precoVenda)
    setreferenciaTec(prodSelected.referenciaTec)
    setdemandaDiaria(prodSelected.demandaDiaria)
    setestoque(prodSelected.estoque)
    setestoqueFornecedor(prodSelected.estoqueFornecedor)
    setleadTime(prodSelected.leadTime)
    setativo(prodSelected.ativo)
    setdataInatividade(prodSelected.dataInatividade)
    setredeSKU(prodSelected.redeSKU)
    setpedidoMinimo(prodSelected.pedidoMinimo)
    setentregaMinima(prodSelected.entregaMinima)
    setqtdEmbalagem(prodSelected.qtdEmbalagem)
    setmoduloMinimo(prodSelected.moduloMinimo)
    setmoduloMaster(prodSelected.moduloMaster)
    setcomprimento_cm(prodSelected.comprimento_cm)
    setlargura_cm(prodSelected.largura_cm)
    setaltura_cm(prodSelected.altura_cm)
    setcubagemEmbalagem(prodSelected.cubagemEmbalagem)
    setpesoLiq(prodSelected.pesoLiq)
    setpesoBruto(prodSelected.pesoBruto)
    setestoqueMinimo(prodSelected.estoqueMinimo)
    setestoqueMaximo(prodSelected.estoqueMaximo)
    setcurva(prodSelected.curva)
    setmediaDeVendaA(prodSelected.mediaDeVendaA)
    setmediaDeVendaB(prodSelected.mediaDeVendaB)
    setdtUltimaVenda(prodSelected.dtUltimaVenda)
    setdepartamentoCategoria(prodSelected.departamentoCategoria)
    setncm(prodSelected.ncm)
    setdescricaoNCM(prodSelected.descricaoNCM)
    setmarca(prodSelected.marca)
    setcustoUltimaCompra(prodSelected.custoUltimaCompra)
    setdataPrimeiraVenda(prodSelected.dataPrimeiraVenda)
    setstatusProduto(prodSelected.statusProduto)
    setorigem(prodSelected.origem)
    setdepartamentoId(prodSelected.departamentoId)
    setempresaId(prodSelected.empresaId)
    setPriceFormated(prodSelected.image)
    setPreco(prodSelected.status)

    // setIsSKU()
    // setImage()

  }


  useEffect(
    () => {

    handleLoadProdutos()

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
              return (
              <S.BoxProd key={product.id}>
                <Link to={`/produto/${product.id}`}>
                  <img src={product.image ? product.image : IMAGE4} alt='' />
                </Link>
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <span>{formatPrice(parseFloat(product.precoVenda))}</span>
                <S.ContainerButtons>
                  <ButtonDelete/>
                  <div
                    onClick={
                      () => {
                        openModal()
                        handleSetProdutoFields(index) 
                      }
                    }
                  >
                    <ChangeBtn
                    />
                  </div>
                </S.ContainerButtons>
              </S.BoxProd>
              )
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


          <S.ContainerRegisterSupplier
        onSubmit={(e) => {
          e.preventDefault()
          createProduct()
        }}
      >
        <S.ImageInput>
          <div className="image-upload">
            <label for="file-input">
              <img className="inputImage" src={image} />
            </label>

            <input id="file-input" type='file'
              name='image'
              onChange={e => {
                console.log(e)
                nameImage = e.target.files[0].name
                Image = e.target.files[0]
                console.log(e.target.files[0].name)
                console.log(e.target.files[0])

                if (e.target.files[0].type.includes('image')) {
                uploadImage(e.target.files[0])
                } else {
                 toast.error('Arquivo inválido!')
                }
              }} />
          </div>

        </S.ImageInput>
        <S.RegisterSupplier>
          <h2>Novo produto</h2>

          <S.RegisterSupplierForm>
            <S.ContentSupplierForm>
              <label htmlFor='name-product'>Nome do produto*</label>
              <input
                required
                value={nome}
                type='text'
                id='name-product'
                onChange={(text) => setnome(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='code'>Código*</label>
              <input
                required
                value={codigo}
                type='text'
                id='code'
                onChange={(text) => setcodigo(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='description'>Descrição*</label>
              <input
                required
                value={descricao}
                type='text'
                id='description'
                onChange={(text) => setdescricao(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ref'>Referência técnica</label>
              <input
                type='text'
                value={referenciaTec}
                id='ref'
                onChange={(text) => setreferenciaTec(text.target.value)}
              />
            </S.ContentSupplierForm>
            <S.SelectItems
              style={{ width: '95%', padding: 0 }}
            >
              <label htmlFor='material'>Tipo de material*</label>
              {/* <input
                required
                type='text'
                id='material'
                onChange={(text) => settipoMaterial(text.target.value)}
              /> */}

              <select
                required
                id='product-sku'
                onChange={(text) => {
                  console.log(text.target.value)
                  settipoMaterial(text.target.value)
                }
                }
              >
                {tipoMateriais.map(
                  (materialDisponivel) => (
                    <option
                      value={materialDisponivel}
                    >{materialDisponivel}</option>
                  )
                )}
              </select>
            </S.SelectItems>

            <S.ContentSupplierForm>
              <label htmlFor='inactivity'>Data de inatividade</label>
              <input
                type='date'
                value={dataInatividade}
                id='inactivity'
                onChange={(text) => setdataInatividade(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.SelectItems
              style={{ width: '95%', padding: 0 }}
            >
              <label htmlFor='category'>Departamento / Categoria*</label>
              <select
                required
                value={departamentoId}
                onChange={(e) => {
                  // console.log(e.target.id)
                  console.log(e.target.value)
                  setdepartamentoId(e.target.value)
                }
                }
              >
                {
                categorias.map(
                  (categoria) => (
                    <option
                      value={categoria.id}
                      id={categoria.nome}
                      onClick={(e) => console.log(e.target.id)}
                    >
                      {categoria.nome}
                    </option>
                  )
                )
                }
              </select>


            </S.SelectItems>

            <S.ContentSupplierForm>
              <label htmlFor='stock'>Quantia em estoque*</label>
              <input
                value={estoque}
                required
                type='number'
                id='stock'
                onChange={(text) => {
                  handleSetNumber(text.target.value, setestoque)
                  handleSetNumber(text.target.value, setestoqueFornecedor)
                }}
              />
              {/* HÁ OUTROS TIPOS DE ESTOQUE? */}
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='demand'>Demanda*</label>
              <input
                required
                value={demandaDiaria}
                type='text'
                id='demand'
                onChange={(text) => setdemandaDiaria(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='safety-stock'>Estoque de segurança*</label>
              <input
                required
                type='number'
                value={estoqueMinimo}
                id='safety-stock'
                onChange={(text) => {
                  handleSetNumber(text.target.value, setestoqueMinimo)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='maximum-stock'>Estoque máximo*</label>
              <input
                required
                type='number'
                value={estoqueMaximo}
                id='maximum-stock'
                onChange={(text) => {
                  handleSetNumber(text.target.value, setestoqueMaximo)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='minimum-module'>Módulo mínimo*</label>
              <input
                value={moduloMinimo}
                required
                type='text'
                id='minimum-module'
                // onChange={(text) => setestoqueMinimo(text.target.value)}
                onChange={(text) => {
                  handleSetNumber(text.target.value, setmoduloMinimo)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='minimum-module'>Módulo Máximo*</label>
              <input
                value={moduloMaster}
                required
                type='text'
                id='minimum-module'
                // onChange={(text) => setestoqueMinimo(text.target.value)}
                onChange={(text) => {
                  handleSetNumber(text.target.value, setmoduloMaster)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='brand'>Marca*</label>
              <input
                required
                type='text'
                value={marca}
                id='brand'
                onChange={(text) => setmarca(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='minimum-delivery'>Entrega mínima*</label>
              <input
                required
                type='email'
                id='minimum-delivery'
                value={entregaMinima}
                // onChange={(text) => setentregaMinima(text.target.value)}
                onChange={(text) => {
                  handleSetNumber(text.target.value, setentregaMinima)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='minimum-order'>Pedido mínimo (Quant/Valor)*</label>
              <input
                required
                type='text'
                value={pedidoMinimo}
                id='minimum-order'
                onChange={(text) => setpedidoMinimo(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='price'>Preço*</label>
              {/* <input
                required
                type='text'
                id='price'
                onChange={(text) => setprecoVenda(text.target.value)}
              /> */}
              <IntlCurrencyInput
                required
                currency="BRL"
                config={currencyConfig}
                onChange={handleChangePrice}
                value={priceFormated}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='height'>Altura(cm)*</label>
              <div>
                <input
                  value={altura_cm}
                  required
                  type='number'
                  id='height'
                  onChange={(text) => {
                    handleSetNumber(text.target.value, setaltura_cm)
                  }}
                  onBlur={
                    (e) => {
                      console.log(e.target.value)
                      handleCubagem(altura_cm, largura_cm, comprimento_cm, setcubagemEmbalagem)
                    }
                  }
                />
              </div>
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='length'>Comprimento(cm)*</label>
              <div>
                <input
                  value={comprimento_cm}
                  required
                  type='number'
                  id='length'
                  onChange={(text) => {
                    handleSetNumber(text.target.value, setcomprimento_cm)
                  }}
                  onBlur={
                    (e) => {
                      console.log(e.target.value)
                      handleCubagem(altura_cm, largura_cm, comprimento_cm, setcubagemEmbalagem)
                    }
                  }
                />
              </div>
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='width'>Largura(cm)*</label>
              <div>
                <input
                  value={largura_cm}
                  required
                  type='number'
                  id='width'
                  onChange={(text) => {
                    handleSetNumber(text.target.value, setlargura_cm)
                  }}
                  onBlur={
                    (e) => {
                      console.log(e.target.value)
                      handleCubagem(altura_cm, largura_cm, comprimento_cm, setcubagemEmbalagem)
                    }
                  }
                />
              </div>
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='packaging'>Cubagem da embalagem (cm<sup>3</sup>)*</label>
              <div>
                <input
                  value={cubagemEmbalagem}
                  required
                  type='text'
                  id='packaging'
                  onChange={(text) => setcubagemEmbalagem(text.target.value)}
                />
              </div>
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='packaging'>Quantidade da embalagem*</label>
              <div>
                <input
                  value={qtdEmbalagem}
                  required
                  type='number'
                  id='packaging'
                  onChange={(text) => {
                    handleSetNumber(text.target.value, setqtdEmbalagem)
                  }}
                />
              </div>
            </S.ContentSupplierForm>


            <S.ContentSupplierForm>
              <label htmlFor='gross-weight'>Peso bruto(g)*</label>
              <input
                required
                value={pesoBruto}
                type='number'
                id='gross-weight'
                onChange={(text) => {
                  handleSetNumber(text.target.value, setpesoBruto)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='liquid-weight'>Peso líquido(g)*</label>
              <input
                required
                value={pesoLiq}
                type='number'
                id='liquid-weight'
                // onChange={(text) => setpesoLiq(text.target.value)}
                onChange={(text) => {
                  handleSetNumber(text.target.value, setpesoLiq)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='last-sale'>Data da última venda</label>
              <input
                type='date'
                value={dtUltimaVenda}
                id='last-sale'
                onChange={(text) => setdtUltimaVenda(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='first-sale'>Data da primeira venda</label>
              <input
                type='date'
                value={dataPrimeiraVenda}
                id='first-sale'
                onChange={(text) => setdataPrimeiraVenda(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ncm'>NCM</label>
              <input
                type='text'
                value={ncm}
                id='ncm'
                onChange={(text) => setncm(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ncm-description'>Descrição NCM</label>
              <input
                type='text'
                value={descricaoNCM}
                id='ncm-description'
                onChange={(text) => setdescricaoNCM(text.target.value)}
              />
            </S.ContentSupplierForm>
          </S.RegisterSupplierForm>

          <S.ContentSupplierFormRadio>
            <span>Rede SKU*</span>
            <S.Radio>
              <S.RadioContainer>
                <input
                  onClick={(e) => {
                    let value = e.target.value
                    console.log(value)
                    setredeSKU(value)
                  }}
                  type='radio'
                  name='redeSku'
                  id='s'
                  value="Sim"
                />
                <p>Sim</p>
              </S.RadioContainer>

              <S.RadioContainer>
                <input
                  onClick={(e) => {
                    let value = e.target.value
                    console.log(value)

                    setredeSKU(value)
                  }}
                  type='radio'
                  name='redeSku'
                  id='n'
                  value="Não"
                />
                <p>Não</p>
              </S.RadioContainer>
            </S.Radio>
          </S.ContentSupplierFormRadio>

          <S.ContentSupplierFormRadio>
            <span>Origem do produto</span>
            <S.Radio>
              <S.RadioContainer>
                <input
                  type='radio'
                  name='produtoOrigem'
                  id='n'
                  onChange={(text) => setorigem('Nacional')}
                />
                <p>Nacional</p>
              </S.RadioContainer>

              <S.RadioContainer>
                <input
                  type='radio'
                  name='produtoOrigem'
                  id='i'
                  onChange={(text) => setorigem('Importado')}
                />
                <p>Importado</p>
              </S.RadioContainer>
            </S.Radio>
          </S.ContentSupplierFormRadio>

          <S.ContentSupplierForm>
            <S.LeadTime>
              <label htmlFor='lead-time'>Lead time*</label>
              <input
                required
                type='text'
                value={leadTime}
                id='lead-time'
                onChange={(text) => setleadTime(text.target.value)}
              />
            </S.LeadTime>
          </S.ContentSupplierForm>

          <S.SelectItems>
            <label htmlFor='bar-code'>Código de barras</label>
            <input
              required
              value={codigoDeBarras}
              type='text'
              id='lead-time'
              onChange={(text) => setCodigoDeBarras(text.target.value)}
            />

            <label htmlFor='unit-of-measurement'>Unidade de medida</label>
            <select
              required
              value={unidadeMedida}
              onChange={(text) => setunidadeMedida(text.target.value)}
              id='unit-of-measurement'>
              {medidas.map(
                (medida) => (
                  <option value={medida}>{medida}</option>
                )
              )}
            </select>
          </S.SelectItems>
          <S.SelectItems>
            <input
              value={redeSKU}
              required
              type='text'
              id='lead-time'
              onChange={(text) => setredeSKU(text.target.value)}
            />

            <label htmlFor='bar-code'>Curva</label>
            <select
              value={curva}
              onChange={(text) => setcurva(text.target.value)}
              id='unit-of-measurement'>
              {curvaTipos.map(
                (curvaTipo) => (
                  <option value={curvaTipo}>{curvaTipo}</option>
                )
              )}
            </select>
          </S.SelectItems>
        </S.RegisterSupplier>
      </S.ContainerRegisterSupplier>
        </S.Container>

        <S.BtnsContent>
          <button onClick={closeModal}>Cancelar</button>
          <button style={{ marginLeft: '10px' }}  onClick={() => handleAddProduct(id)}>Salvar</button>
        </S.BtnsContent>
      </Modal>

    </>
  )
}

