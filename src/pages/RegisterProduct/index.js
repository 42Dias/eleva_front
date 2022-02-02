import React, { useState ,useEffect, useRef, useCallback } from "react";

import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import IMAGE from '../../assets/upload.png'
import * as S from './styled'
import IntlCurrencyInput from "react-intl-currency-input"
import InputMask from 'react-input-mask';
import cadastrarProduct from "../../services/cadastrarProduct";
import currencyConfig from '../../utils/currenryConfig'
import { FaSortNumericUp } from "react-icons/fa";
import handleSetNumber from "../../utils/handleSetNumber";

export default  function RegisterProduct() {
  const [codigo, setcodigo] = useState('')
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
  const [priceFormated,   setPriceFormated] = useState('')
  const [preco,   setPreco]                 = useState('')

  function createProduct(){
    const prodData = generateProductData()
    console.log(prodData)

    // cadastrarProduct(data)
  }
  function generateProductData(){
  const data = {
    codigo: codigo,
    nome: nome,
    descricao: descricao,
    unidadeMedida: unidadeMedida,
    tipoMaterial: tipoMaterial,
    precoVenda: precoVenda,
    referenciaTec: referenciaTec,
    demandaDiaria: demandaDiaria,
    estoque: estoque,
    estoqueFornecedor: estoqueFornecedor,
    leadTime: leadTime,
    ativo: ativo,
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
  }
  return data
  }

  const handleChangePrice = (event, value, maskedValue) => {
    event.preventDefault();

    setPreco(value); // value without mask (ex: 1234.56)
    setPriceFormated(maskedValue); // masked value (ex: R$1234,56)
  };


  return (
    <>
      <Navbar />
      <S.ContainerRegisterSupplier
      onSubmit= { () => createProduct()}
      >
        <S.BoxImage>
          <img src={IMAGE} alt='upload image' />
        </S.BoxImage>
        <S.RegisterSupplier>
          <h2>Novo produto</h2>

          <S.RegisterSupplierForm>
            <S.ContentSupplierForm>
              <label htmlFor='name-product'>Nome do produto</label>
              <input
                required
                type='text'
                id='name-product'
                onChange={(text) => setnome(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='code'>Código</label>
              <input
                required
                type='text'
                id='code'
                onChange={(text) => setcodigo(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='description'>Descrição</label>
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
                required
                type='text'
                id='ref'
                onChange={(text) => setreferenciaTec(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='material'>Tipo de material</label>
              <input
                required
                type='text'
                id='material'
                onChange={(text) => settipoMaterial(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='inactivity'>Data de inatividade</label>
              <input
                required
                type='text'
                id='inactivity'
                onChange={(text) => setdataInatividade(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='category'>Categoria</label>
              <input
                required
                type='text'
                id='category'
                // onChange={(text) => setcategoria(text.target.value)} // HA CATEGORIA???
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='stock'>Quantia em estoque</label>
              <input
                required
                type='number'
                id='stock'
                onChange={(text) => {
                  handleSetNumber(text.target.value, setestoque)
                }}
              />
              {/* HÁ OUTROS TIPOS DE ESTOQUE? */}
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='demand'>Demanda</label>
              <input
                required
                type='text'
                id='demand'
                onChange={(text) => setdemandaDiaria(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='safety-stock'>Estoque de segurança</label>
              <input
                required
                type='number'
                id='safety-stock'
                onChange={(text) => {
                  handleSetNumber(text.target.value, setestoqueFornecedor)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='maximum-stock'>Estoque máximo</label>
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
              <label htmlFor='minimum-module'>Módulo mínimo é numero?</label>
              <input
                required
                type='text'
                id='minimum-module'
                onChange={(text) => setestoqueMinimo(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='brand'>Marca</label>
              <input
                required
                type='text'
                id='brand'
                onChange={(text) => setmarca(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='minimum-delivery'>Entrega mínima é numero?</label>
              <input
                required
                type='email'
                id='minimum-delivery'
                onChange={(text) => setentregaMinima(text.target.value)}
                
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='minimum-order'>Pedido mínimo (Quant/Valor)</label>
              <input
                required
                type='text'
                id='minimum-order'
                onChange={(text) => setpedidoMinimo(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='price'>Preço</label>
              {/* <input
                required
                type='text'
                id='price'
                onChange={(text) => setprecoVenda(text.target.value)}
              /> */}
            </S.ContentSupplierForm>
            <IntlCurrencyInput 
                  currency="BRL" 
                  config={currencyConfig}
                  onChange={handleChangePrice} 
                  value={priceFormated}
            />

            <S.ContentSupplierForm>
              <label htmlFor='height'>Altura(cm)</label>
              <input
                required
                type='number'
                id='height'
                // onChange={(text) => setaltura_cm(text.target.value)}
                onChange={(text) => {
                  handleSetNumber(text.target.value, setaltura_cm)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='length'>Comprimento(cm)</label>
              <input
                required
                type='number'
                id='length'
                // onChange={(text) => setcomprimento_cm(text.target.value)}
                onChange={(text) => {
                  handleSetNumber(text.target.value, setcomprimento_cm)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='packaging'>Cubagem da embalagem</label>
              <input
                required
                type='text'
                id='packaging'
                onChange={(text) => setcubagemEmbalagem(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='width'>Largura(cm)</label>
              <input
                required
                type='number'
                id='width'
                // onChange={(text) => setlargura_cm(text.target.value)}
                onChange={(text) => {
                  handleSetNumber(text.target.value, setlargura_cm)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='gross-weight'>Peso bruto(g)</label>
              <input
                required
                type='number'
                id='gross-weight'
                // onChange={(text) => setpesoBruto(text.target.value)}
                onChange={(text) => {
                  handleSetNumber(text.target.value, setpesoBruto)
                }}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='liquid-weight'>Peso líquido(g)</label>
              <input
                required
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
                required
                type='date'
                id='last-sale'
                onChange={(text) => setdtUltimaVenda(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='first-sale'>Data da primeira venda</label>
              <input
                required
                type='date'
                id='first-sale'
                onChange={(text) => setdataPrimeiraVenda(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ncm'>NCM</label>
              <input
                required
                type='text'
                id='ncm'
                onChange={(text) => setncm(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ncm-description'>Descrição NCM</label>
              <input
                required
                type='text'
                id='ncm-description'
                onChange={(text) => setdescricaoNCM(text.target.value)}
              />
            </S.ContentSupplierForm>
          </S.RegisterSupplierForm>

          <S.ContentSupplierFormRadio>
            <span>Rede SKU</span>
            <S.Radio>
              <S.RadioContainer>
                <input
                  onClick={(e) => {
                    let value  = e.target.value
                    setIsSKU(value)
                  }}
                  required 
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
                    let value  = e.target.value
                    setIsSKU(value)
                  }}
                  required
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
                  required 
                  type='radio' 
                  name='produtoOrigem' 
                  id='n' 
                  onChange={(text) => setorigem('Nacional')}
                  />
                <p>Nacional</p>
              </S.RadioContainer>

              <S.RadioContainer>
                <input
                  required 
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
              <label htmlFor='lead-time'>Lead time</label>
              <input
                required
                type='text'
                id='lead-time'
                onChange={(text) => setleadTime(text.target.value)}
              />
            </S.LeadTime>
          </S.ContentSupplierForm>

          <S.SelectItems>
            <label htmlFor='product-sku'>Produto SKU</label>
            <select
              required 
              id='product-sku'
              onChange={(text) => setredeSKU(text.target.value)}
              >
              <option>informação 1</option>
              <option>informação 2</option>
            </select>

            <label htmlFor='bar-code'>Código de barras</label>
            <select
              required 
              onChange={(text) => setcodigo(text.target.value)}
              
              id='bar-code'>
              <option>informação 1</option>
              <option>informação 2</option>
            </select>

            <label htmlFor='unit-of-measurement'>Unidade de medida</label>
            <select 
              required 
              onChange={(text) => setunidadeMedida(text.target.value)}
              id='unit-of-measurement'>
              <option>informação 1</option>
              <option>informação 2</option>
            </select>
          </S.SelectItems>
        </S.RegisterSupplier>
        <S.Button>
          <button  style={{ background: '#AA2323' }}>
            Cancelar
          </button>
          <button
          onSubmit= { () => createProduct()}
          >Salvar</button>
        </S.Button>
      </S.ContainerRegisterSupplier>
    </>
  )
}