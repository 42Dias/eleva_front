import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
import cadastrarTabelaPreco from '../../services/tabelaPreco/cadastrarTabelaPreco'
import { empresaId } from '../../services/api'
import productFindWithFilter from '../../services/produto/productFindWithFilter'
import IntlCurrencyInput from "react-intl-currency-input"
import currencyConfig from '../../utils/currenryConfig'
import InputMask from 'react-input-mask';
import { ToastHeader } from 'react-bootstrap'
import { toast } from 'react-toastify'

export default function PriceNegotiation() {

  const [produtos, setProdutos] = useState([])
  const [produto, setProduto] = useState("")
  const [empresaCompradoraCNPJ, setEmpresaCompradoraCNPJ] = useState("")
  //empresaCompradoraCNPJ
  const [preco, setPreco] = useState(0)
  const [priceFormated, setPriceFormated] = useState("")
  async function handleProdutosFromFornecedor(){
    
    let filter      = `empresa`
    let filterValue = `${empresaId}`
    console.log(filter, filterValue)
    let produtosFromFornecedor = await productFindWithFilter(filter, filterValue)
    setProdutos(produtosFromFornecedor)

    //sets the first product, if the user do not choose!
    setProduto(produtosFromFornecedor[0].id)
  }



  const handleChangePrice = (event, value, maskedValue) => {
    event.preventDefault();

    setPreco(value); // value without mask (ex: 1234.56)
    setPriceFormated(maskedValue); // masked value (ex: R$1234,56)
  };

  async function HandleSubmitTabela(e){
    e.preventDefault()
    e.target.reset()

    if(preco <= 0){
      toast.error("Preço Inválido!")
      return
    }

    let body = {
      empresaCompradoraCNPJ: empresaCompradoraCNPJ,
      valorUnitario:         preco                ,
      produto:               produto              ,
    }

    // console.log(body)
    cadastrarTabelaPreco(body)
  }

  useEffect(
    () => {
      handleProdutosFromFornecedor()
      
    }, []
  )

  return (
    <>
      <Navbar />
      <S.ContainerRegisterSupplier>
        <S.RegisterSupplier
        onSubmit={(e) => HandleSubmitTabela(e)}
        >
          <h2>Preço negociado</h2>
          <S.ContentSupplierForm>
            {/* <S.Price>
              <label htmlFor='supplying-company'>Empresa Fornecedora</label>
              <input type='text' id='supplying-company' />
            </S.Price> */}

            <S.Price>
              <label htmlFor='buyer-company'>CNPJ da Empresa Compradora</label>
              <InputMask
                id='cnpj'
                htmlFor='cnpj'
                required
                mask="99.999.999/9999-99"
                value={empresaCompradoraCNPJ} 
                className='input'
                onChange={
                  (e) => {
                    let cnpj = e.target.value
                    console.log(
                      cnpj.replace(/\D/g, '')
                      )
                    setEmpresaCompradoraCNPJ(e.target.value)
                    // console.log(maskedCnpj)
                  }
                }
              />
            </S.Price>

            <S.Price>

            <label
            htmlFor='buyer-company'>
              Produto
            </label>

            <select
             required
             htmlFor='product'
             name="Produto"
             onChange={(e) => {
               let produtoId = e.target.value
               console.log(produtoId)
               setProduto(produtoId)
             }} 
            >
            {
              produtos.map(
                (produto, index) => (
                  <>
                  <option 
                  key={produto.id}
                  value={produto.id}
                  >
                    {produto.nome}
                  </option>
                  ) 

                </>
                )
              )
            }

            </select>
            </S.Price>


            <S.Price>
              <label htmlFor='unit-value'>Valor Unitário</label>
              <IntlCurrencyInput
                required
                currency= "BRL"
                config  = {currencyConfig}
                onChange= {handleChangePrice}
                value   = {priceFormated}
              />
            </S.Price>

            {/*<S.Price>
              <label htmlFor='freight'>Tipo de frete</label>
              <input type='text' id='freight' />
            </S.Price> */}
          </S.ContentSupplierForm>


          <button  style={{ background: '#AA2323' }}>
            Cancelar
          </button>

          <button
           type='submit'
          >
            Salvar
          </button>

        </S.RegisterSupplier>
      </S.ContainerRegisterSupplier>
    </>
  )
}
