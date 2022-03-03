import React, { useState, useEffect, useRef, useCallback } from "react";

import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import IMAGE from '../../assets/upload.png'
import * as S from './styled'
import IntlCurrencyInput from "react-intl-currency-input"
import InputMask from 'react-input-mask';
import cadastrarProduct from "../../services/produto/cadastrarProduct";
import currencyConfig from '../../utils/currenryConfig'
import { FaSortNumericUp } from "react-icons/fa";
import handleSetNumber from "../../utils/handleSetNumber";
import handleCubagem from "../../utils/handleCubagem";
import { api, empresaId } from "../../services/api";
import loadCategorias from "../../services/categoria/loadCategorias";
import { toast } from "react-toastify";
import axios from "axios";

export default function RegisterProduct() {
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
  //const [empresaId, setempresaId] = useState('')
  const [priceFormated, setPriceFormated] = useState('')
  const [preco, setPreco] = useState('')
  const [image, setImage] = useState(IMAGE)
  let credencial = ''
  var nameImage = ''
  var Image
  const formData = new FormData() 
  
  function createProduct() {
    const data = generateProductData()
    // console.log(prodData)
    let bodyRequisition = data

    cadastrarProduct(bodyRequisition).then(
      (funcReturn) => {
        if (funcReturn == 'ok') {
          window.location.hash = '#/home'                 
        }
      }
    )
  }
  function generateProductData() {
    const data = {
      codigo: codigo,
      nome: nome,
      descricao: descricao,
      unidadeMedida: unidadeMedida,
      tipoMaterial: tipoMaterial,
      precoVenda: preco,
      referenciaTec: referenciaTec,
      demandaDiaria: demandaDiaria,
      estoque: estoque,
      estoqueFornecedor: estoqueFornecedor,
      leadTime: leadTime,
      ativo: "Sim", // PARA TESTE !!!!!!
      dataInatividade: dataInatividade,
      redeSKU: redeSKU,
      pedidoMinimo: pedidoMinimo,
      entregaMinima: entregaMinima,
      qtdEmbalagem: qtdEmbalagem,
      moduloMinimo: moduloMinimo,
      moduloMaster: moduloMaster,
      comprimento_cm: comprimento_cm,
      largura_cm: largura_cm,
      altura_cm: altura_cm,
      cubagemEmbalagem: cubagemEmbalagem,
      pesoLiq: pesoLiq,
      pesoBruto: pesoBruto,
      estoqueMinimo: estoqueMinimo,
      estoqueMaximo: estoqueMaximo,
      curva: curva,
      mediaDeVendaA: mediaDeVendaA,
      mediaDeVendaB: mediaDeVendaB,
      dtUltimaVenda: dtUltimaVenda,
      departamentoCategoria: departamentoCategoria,
      ncm: ncm,
      descricaoNCM: descricaoNCM,
      marca: marca,
      custoUltimaCompra: custoUltimaCompra,
      dataPrimeiraVenda: dataPrimeiraVenda,
      statusProduto: statusProduto,
      origem: origem,
      departamentoId: departamentoId,
      empresaId: empresaId,
      image: image,
      status: false,
    }
    return data
  }

  const handleChangePrice = (event, value, maskedValue) => {
    event.preventDefault();

    setPreco(value); // value without mask (ex: 1234.56)
    setPriceFormated(maskedValue); // masked value (ex: R$1234,56)
  };

  useEffect(
    () => {

      loadCategorias(setcategorias)
    }, []
  )

  useEffect(
    () => {
      // Estas são os padrões aceitos pelo back
      setMedidas(["AMP", "BUI", "BG", "BOLS", "CX", "CAP", "CARP", "COM", "DOSE", "ENV", "FLAC", "FR", "FA", "GAL", "GTS", "G", "L", "MCG", "MUI", "MG", "ML", "OVL", "PAS", "LT", "PER", "PIL", "PT", "KG", "SER", "SUP", "TABLE", "TUB", "TB", "UN", "UI", "CM", "CONJ", "KIT", "MÇ", "M", "PC", "PEÇA", "RL", "GY", "CGY", "PAR", "ADES", "COM EFEV", "COM MST", "SACHE"])

      settipoMateriais(["Matéria Prima", "Produto Improdutivo", "Embalagens", "Produto Acabado", "Fabricado", "Revenda"])

      setcurvaTipos(["A", "B", "C", "D", "E", "F", "G"])
    }, []
  )

  const uploadImage = async (imagemNova) => {
    
    //console.log("upload")
    formData.append('file', imagemNova)

    // console.log(...formData)

    const headers = {
      headers: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'multipart/form-data',

      },
    }
    console.log(nameImage)
    await api.get(`file/credentials`, {
      params: {
        filename: nameImage,
        storageId: 'produtoImagem1',
      },
    })
      .then((response) => {
        console.log(response)
        if (response.status == 200) {
          credencial = response.data.uploadCredentials.url
          setImage(response.data.downloadUrl)
          console.log(credencial)
          console.log(imagemNova)          
          axios.post(credencial, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }).then((response) => {
            console.log(response)
            if (response.statusText === 'OK') {
              //toast.success('Cadastrado realizado com sucesso!')
              toast.success('Imagem Válida!')
              
            }
          }).catch(res => {
            //console.log(res)
            toast.error(res.response)
            setLoading(false)
          })
        } else {
          toast.info('Imagem inválida, ou problemas com o servidor :(')
        }
      }).catch((err) => {
        if (err.response) {
          console.log(err)
          toast.error('Erro: Tente mais tarde :(')
        } else {
          // setStatus({
          //   type: 'error',
          //   mensagem: "Erro: Tente mais tarde :("
          // });
        }
        console.log(err)
        toast.error('Erro: Tente mais tarde :(')
      })
  }

  return (
    <>
      <Navbar />
      <S.ContainerRegisterSupplier
        onSubmit={(e) => {
          e.preventDefault()
          createProduct()
        }}
      >
        <S.ImageInput>
          <div class="image-upload">
            <label for="file-input">
              <img className="inputImage" src={image} />
            </label>

            <input id="file-input" type='file'
              name='image'
              onChange={e => {
                console.log(e)
                // @ts-ignore
                nameImage = e.target.files[0].name
                // @ts-ignore
                Image = e.target.files[0]
                // @ts-ignore
                console.log(e.target.files[0].name)
                // @ts-ignore
                //setName(name)
                // @ts-ignore
                console.log(e.target.files[0])
                // @ts-ignore
                //setImage(e.target.files[0])

                // @ts-ignore
                if (e.target.files[0].type.includes('image')) {
                // @ts-ignore
                uploadImage(e.target.files[0])
                } else {
                 toast.error('Arquivo inválido!')
                }
              }} />
          </div>
          {/* <img src={IMAGE}
            alt='upload image'
            type='file'
            name='image'
            onChange={e => {
              //console.log(e)
              // @ts-ignore
              nameImage = e.target.files[0].name
              // @ts-ignore
              Image = e.target.files[0]
              // @ts-ignore
              console.log(e.target.files[0].name)
              // @ts-ignore
              setName(name)
              // @ts-ignore
              console.log(e.target.files[0])
              // @ts-ignore
              setImage(e.target.files[0])

              // @ts-ignore
              //if (e.target.files[0].type.includes('image') || e.target.files[0].type.includes('file')) {
              // @ts-ignore
              uploadImage(e.target.files[0])
              //} else {
              // toast.error('Arquivo não suportado')
              // }
            }}
          /> */}

        </S.ImageInput>
        <S.RegisterSupplier>
          <h2>Novo produto</h2>

          <S.RegisterSupplierForm>
            <S.ContentSupplierForm>
              <label htmlFor='name-product'>Nome do produto*</label>
              <input
                required
                type='text'
                id='name-product'
                onChange={(text) => setnome(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='code'>Código*</label>
              <input
                required
                type='text'
                id='code'
                onChange={(text) => setcodigo(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='description'>Descrição*</label>
              <input
                required
                type='text'
                id='description'
                onChange={(text) => setdescricao(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ref'>Referência técnica</label>
              <input
                type='text'
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
                id='inactivity'
                onChange={(text) => setdataInatividade(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.SelectItems
              style={{ width: '95%', padding: 0 }}
            >
              <label htmlFor='category'>Departamento / Categoria*</label>
              {/* <input
                required
                type='text'
                id='category'
                // onChange={(text) => setcategoria(text.target.value)} // HA CATEGORIAS???
              /> */}
              <select
                required
                onChange={(e) => {
                  // console.log(e.target.id)
                  console.log(e.target.value)
                  setdepartamentoId(e.target.value)
                }
                }
              >
                {categorias.map(
                  (categoria) => (
                    <option
                      value={categoria.id}
                      id={categoria.nome}
                      onClick={(e) => console.log(e.target.id)}
                    >
                      {categoria.nome}
                    </option>
                  )
                )}
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
                id='last-sale'
                onChange={(text) => setdtUltimaVenda(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='first-sale'>Data da primeira venda</label>
              <input
                type='date'
                id='first-sale'
                onChange={(text) => setdataPrimeiraVenda(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ncm'>NCM</label>
              <input
                type='text'
                id='ncm'
                onChange={(text) => setncm(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ncm-description'>Descrição NCM</label>
              <input
                type='text'
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
                id='lead-time'
                onChange={(text) => setleadTime(text.target.value)}
              />
            </S.LeadTime>
          </S.ContentSupplierForm>

          <S.SelectItems>
            {/* <select
              required 
              id='product-sku'
              onChange={(text) => setredeSKU(text.target.value)}
              >
              <option>informação 1</option>
              <option>informação 2</option>
            </select> */}
            {/* <label htmlFor='product-sku'>Produto SKU*</label>
            <input
                required
                type='text'
                id='lead-time'
                onChange={(text) => setredeSKU(text.target.value)}
              /> */}

            <label htmlFor='bar-code'>Código de barras</label>
            {/* <select
              required 
              onChange={(text) => setcodigo(text.target.value)}
              
              id='bar-code'>
              <option>informação 1</option>
              <option>informação 2</option>
            </select> */}

            <input
              required
              type='text'
              id='lead-time'
              onChange={(text) => setCodigoDeBarras(text.target.value)}
            />

            <label htmlFor='unit-of-measurement'>Unidade de medida</label>
            <select
              required
              onChange={(text) => setunidadeMedida(text.target.value)}
              id='unit-of-measurement'>
              {/* <option>informação 1</option> */}
              {/* <option>informação 2</option> */}
              {medidas.map(
                (medida) => (
                  <option value={medida}>{medida}</option>
                )
              )}
            </select>
          </S.SelectItems>
          <S.SelectItems>
            <input
              required
              type='text'
              id='lead-time'
              onChange={(text) => setredeSKU(text.target.value)}
            />

            <label htmlFor='bar-code'>Curva</label>

            {/* <input
                required
                type='text'
                id='lead-time'
                onChange={(text) => setCodigoDeBarras(text.target.value)}
              /> */}

            {/* <label htmlFor='unit-of-measurement'>Unidade de medida</label> */}
            <select
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
        <S.Button>
          <button style={{ background: '#AA2323' }}>
            Cancelar
          </button>
          <button
            onSubmit={() => createProduct()}
          >Salvar</button>
        </S.Button>
      </S.ContainerRegisterSupplier>
    </>
  )
}