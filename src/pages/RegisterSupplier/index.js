import React, { useState ,useEffect, useRef, useCallback } from "react";
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import IntlCurrencyInput from "react-intl-currency-input"
import InputMask from 'react-input-mask';


import cepInformation from '../../utils/cepInformation'
import loadEmpresaQuantidade from "../../services/loadEmpresaQuantidade";
import loadRedes from "../../services/loadRedes";
import cadastrarEmpresa from "../../services/cadastrarEmpresa";
/*

CAMPOS COM FORMATAÇÃO ESPECÍFICA!!!!
ativo: 
    "Ativo","Inativo"
perfilComercial: 
    "Compra","Compra e Venda","Venda"
condicaoPagamento:
    "30 Dias","60 Dias","90 Dias"
*/
export default function RegisterSupplier() {
 const [codigo                      , setCodigo] = useState('')
 const [razao                       , setRazao] = useState('')
 const [nome                        , setNome] = useState('')
 const [CNPJ                        , setCNPJ] = useState('')
 const [inscricaoEstadual           , setInscricaoEstadual] = useState('')
 const [inscricaoMunicipal          , setInscricaoMunicipal] = useState('') 
 const [cnaePrincipal               , setCnaePrincipal] = useState('')
 const [cnaececundário              , setCnaececundario] = useState('')
 const [logradouro                  , setLogradouro] = useState('')
 const [cep                         , setCep] = useState('')
 const [numero                      , setNumero] = useState('')
 const [bairro                      , setBairro] = useState('')         
 const [cidade                      , setCidade] = useState('')
 const [estado                      , setEstado] = useState('')
 const [complemento                 , setComplemento] = useState('')  
 const [telefone                    , setTelefone] = useState('')
 const [telefoneSecundario          , setTelefoneSecundario] = useState('')
 const [emailDaEmpresa              , setEmailDaEmpresa] = useState('')
 const [perfilComercial             , setPerfilComercial] = useState('')
 const [leadTime                    , setLeadTime] = useState('')
 const [nomeDoResponsavelComercial  , setNomeDoResponsavelComercial] = useState('')
 const [telefoneDoResponsavel       , setTelefoneDoResponsavel] = useState('') 
 const [emailDoResponsavel          , setEmailDoResponsavel] = useState('')
 const [condicoesDePagamento        , setCondicoesDePagamento] = useState('30 Dias') 
 const [formadePagamento            , setFormadePagamento] = useState('')
 const [phoneNumber                 , setphoneNumber] = useState('')
 const [phoneMaskedNumber           , setphoneMaskedNumber] = useState('')
 const [phoneNumberSecondary        , setphoneNumberSecondary] = useState('')
 const [phoneMaskedNumberSecondary  , setphoneMaskedNumberSecondary] = useState('')
 const [matiz                       , setMatiz] = useState('')
 const [rede                        , setRede] = useState('')
 const [condicaoEmpresa             , setCondicaoEmpresa] = useState('')

 const [redes                        , setRedes] = useState('')

/*
falta = 
Cnae secundário
E outras informações do responsável

MATRIZ E REDE NECESSITAM DE INFOMAÇÕES....S
*/
 
 const [maskedCnpj, setMaskedCnpj] = useState('')
 const [maskedCep, setMaskedCep] = useState('')

  async function handleChangeCEP(e){
    const cep = e.replace(/[^0-9]/g, '')

    if(cep.length == 8){
      const data = await cepInformation(cep)
      console.log(data)
      setCep(data.cep)
      setLogradouro(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setEstado(data.uf) 
    }
  }

  async function hangleCreateEmpresa(e){
    e.preventDefault()
    const data = {
        data:{
        codigo:              codigo ,
        razaoSocial:         razao ,
        nomeFantasia:        nome ,
        cnpj:                CNPJ ,
        inscricaoEstadual:   inscricaoEstadual ,
        inscricaoMunicipal:  inscricaoMunicipal ,
        cnae:                cnaePrincipal ,
        cep:                 cep ,
        estado:              estado ,
        cidade:              cidade ,
        bairro:              bairro ,
        logradouro:          logradouro ,
        numero:              numero ,
        complemento:         complemento ,
        telefone:            telefone ,
        email:               emailDaEmpresa ,
        ativo:               'Ativo' , // Ativo out Inativo
        perfilComercial:     "Compra e Venda" , // "Compra","Compra e Venda","Venda"
        leadTime:            leadTime ,
        condicaoPagamento:   condicoesDePagamento ,
        formaPagamento:      formadePagamento ,
      }
    }
    console.log(data)
    cadastrarEmpresa(data).then(
      (res) => res == 'ok' ? console.log('foi') : console.log('num') 
    )
  }


  async function loadQuantidadeDeEmpresas(){
    const quantidadeDeEmpresas = await loadEmpresaQuantidade()
    setCodigo(`${quantidadeDeEmpresas + 1000}`)
  }

  useEffect(
    () => {
      let delay = 60
      setTimeout(() => loadQuantidadeDeEmpresas(), delay * 1000);
    }, []
  )

  // useEffect(
  //   () => {
  //     let createdRedes = loadRedes()
  //     setRedes(createdRedes)
  //   }, []
  // )

  return (
    <>
      <Navbar />
      <S.ContainerRegisterSupplier
      onSubmit= { (e) => hangleCreateEmpresa(e)}
      >
        <S.RegisterSupplier>
          <h2>Novo fornecedor</h2>

          <S.RegisterSupplierForm>
            <S.ContentSupplierForm>
              <label htmlFor='codigo'>Código*</label>
              {/* Gerado automaticamente */}
              <input 
              style={{cursor: 'not-allowed'}}
              value={codigo}
              type='text' 
              id='codigo'
              // onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='razao-social'>Razão social*</label>
              <input
              required
              type='text'
              id='razao-social'
              onChange={(e) => setRazao(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='nome-fantasia'>Nome fantasia*</label>
              <input
              required
              type='text' 
              id='nome-fantasia'
              onChange={(e) => setNome(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cnpj'>CNPJ*</label>
              {/* <input type='text' id='cnpj'
              onChange={(e) => setCNPJ(e.target.value)}
              /> */}
              <InputMask
              
              required

              id='cnpj'
              htmlFor='cnpj'
              mask="99.999.999/9999-99"
              value={maskedCnpj} 
              className='input'
              onChange={
                (e) => {
                  let cnpj = e.target.value
                  console.log(
                    cnpj.replace(/\D/g, '')
                    )
                    setCNPJ(
                    cnpj.replace(/\D/g, '')
                  )
                  setMaskedCnpj(e.target.value)
                  console.log(maskedCnpj)
                }
              }
            />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='inscricao-estadual'>Inscrição estadual</label>
              <input type='text' id='inscricao-estadual'
              onChange={(e) => setInscricaoEstadual(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='inscricao-municipal'>Inscrição municipal</label>
              <input type='text' id='inscricao-municipal'
              onChange={(e) => setInscricaoMunicipal(e.target.value)}
               />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cnae-principal'>Cnae principal</label>
              <input type='text' id='cnae-principal'
              onChange={(e) => setCnaePrincipal(e.target.value)}
               />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cnae-secundario'>Cnae secundário</label>
              <input type='text' id='cnae-secundario' 
              onChange={(e) => setCnaececundario(e.target.value)}/>
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='logradouro'>CEP*</label>
              {/* <input type='text' id='logradouro'
              onChange={(text) => handleChangeCEP(text.target.value)}
              /> */}
              <InputMask
              id='cnpj'
              htmlFor='cnpj'
              required
              mask="99999-999"
              value={maskedCep} 
              className='input'
              onChange={
                (e) => {
                  let cep = e.target.value
                  console.log(
                    cep.replace(/\D/g, '')
                    )
                    handleChangeCEP(
                    cep.replace(/\D/g, '')
                  )
                  setMaskedCep(e.target.value)
                  console.log(maskedCep)
                }
              }
            />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='logradouro'>Logradouro*</label>
              <input
              required
              type='text'
              id='logradouro'
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='numero'>Número*</label>
              <input
              required
              type='text'
              id='numero'
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='bairro'>Bairro*</label>
              <input
              required
              type='text'
              id='bairro' 
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cidade'>Cidade*</label>
              <input
              required
              type='text'
              id='cidade'
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label>Estado*</label>
              <select 
              required
              value={estado}
              component='select' 
              name='uf'
              onChange={(text) => setEstado(text.target.value)}
              >
                <option value=''>Selecione o Estado</option>
                <option value='AC'>Acre</option>
                <option value='AL'>Alagoas</option>
                <option value='AP'>Amapá</option>
                <option value='AM'>Amazonas</option>
                <option value='BA'>Bahia</option>
                <option value='CE'>Ceará</option>
                <option value='DF'>Distrito Federal</option>
                <option value='ES'>Espírito Santo</option>
                <option value='GO'>Goiás</option>
                <option value='MA'>Maranhão</option>
                <option value='MT'>Mato Grosso</option>
                <option value='MS'>Mato Grosso do Sul</option>
                <option value='MG'>Minas Gerais</option>
                <option value='PA'>Pará</option>
                <option value='PB'>Paraíba</option>
                <option value='PR'>Paraná</option>
                <option value='PE'>Pernambuco</option>
                <option value='PI'>Piauí</option>
                <option value='RJ'>Rio de Janeiro</option>
                <option value='RN'>Rio Grande do Norte</option>
                <option value='RS'>Rio Grande do Sul</option>
                <option value='RO'>Rondônia</option>
                <option value='RR'>Roraima</option>
                <option value='SC'>Santa Catarina</option>
                <option value='SP'>São Paulo</option>
                <option value='SE'>Sergipe</option>
                <option value='TO'>Tocantins</option>
              </select>
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='complemento'>Complemento</label>
              <input type='text' id='complemento'
              onChange={(e) => setComplemento(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='telefone'>Telefone*</label>
              {/* <input type='text' id='telefone' 
              onChange={(e) => setTelefone(e.target.value)}
              /> */}
              <InputMask
                    required
                    mask="(99) 9999-99999"
                    value={phoneMaskedNumber} 
                    className='input'
                    onChange={
                      (e) => {
                        let telefone = e.target.value
                        console.log(
                          telefone.replace(/\D/g, '')
                          )
                          setTelefone(
                          telefone.replace(/[\(\)\.\s-]+/g,'')
                          )
                        setphoneMaskedNumber(e.target.value)
                      }
                    }
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='telefone-secundario'>Celular*</label>
              {/* <input type='text' id='telefone-secundario' 
              onChange={(e) => setCodigo(e.target.value)}
              /> */}
              <InputMask
                    required
                    // (34) 2578-4854
                    // value={phoneMaskedNumberSecondary} 
                    mask="(99) 9999-99999"
                    className='input'
                    onChange={
                      (e) => {
                        let telefone = e.target.value
                        console.log(
                          telefone.replace(/\D/g, '')
                          )
                          setphoneNumberSecondary(
                          telefone.replace(/[\(\)\.\s-]+/g,'')
                          )
                        // setphoneMaskedNumberSecondary(e.target.value)
                      }
                    }
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='email-da-empresa'>Email da empresa*</label>
              <input
              required
              type='email'
              id='email-da-empresa'
              onChange={(e) => setEmailDaEmpresa(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='perfil-comercial'>Perfil comercial</label>
              <select id='forma-de-pagamento'
              onChange={(e) => setPerfilComercial(e.target.value)}
            >
              <option value="Compra" >Compra</option>
              <option value="Venda" >Venda</option>
              <option value="Compra e Venda" >"Compra e Venda"</option>
            </select>


            </S.ContentSupplierForm>
          </S.RegisterSupplierForm>
          <S.ContentSupplierForm>
            <S.LeadTime>
              {/* tempo de espera */}
              <label htmlFor='lead-time'>Lead time*</label>
              <input type='text' id='lead-time'
              onChange={(e) => setLeadTime(e.target.value)}
              />
            </S.LeadTime>
          </S.ContentSupplierForm>

          <S.ContentResponsavel>
            <span>Contato Comercial</span>
            <S.ContainerResponsavel>
              <S.Responsavel>
                <S.StoreResponsavel>
                  <label htmlFor='nome-do-responsável-comercial'>
                    Nome do responsável comercial
                  </label>
                  <input
                  type='text'
                  id='nome-do-responsável-comercial'
                  onChange={(e) => setNomeDoResponsavelComercial(e.target.value)} />
                  
                </S.StoreResponsavel>

                <S.StoreResponsavel>
                  <label htmlFor='telefone-do-responsável'>
                    Telefone do responsável
                  </label>
                  {/* <input type='text' id='telefone-do-responsável'
                  onChange={(e) => setTelefoneDoResponsavel(e.target.value)}
                   /> */}
                   <InputMask
                    // required
                    // (34) 2578-4854
                    // value={phoneMaskedNumberSecondary} 
                    className='input'
                    mask="(99) 9999-99999"
                    onChange={
                      (e) => {
                        let telefone = e.target.value
                        console.log(
                          telefone.replace(/\D/g, '')
                          )
                          setTelefoneDoResponsavel(
                          telefone.replace(/[\(\)\.\s-]+/g,'')
                          )
                        // setphoneMaskedNumberSecondary(e.target.value)
                      }
                    }
              />
                </S.StoreResponsavel>
              </S.Responsavel>

              <S.ResponsavelAlone>
                <label htmlFor='email-do-responsavel'>
                  E-mail do responsável*
                </label>
                <input
                required
                type='email'
                id='email-do-responsavel'
                onChange={(e) => setEmailDoResponsavel(e.target.value)} />
              </S.ResponsavelAlone>
            </S.ContainerResponsavel>
          </S.ContentResponsavel>

          <S.ContentSupplierFormCheckbox>
            <span>Condições de pagamento</span>
            <S.Check>
              <S.CheckContainer>
                <input
                type='radio'
                name='pagamento'
                id='30'
                value="30 Dias"
                checked
                onChange={(e) => setCondicoesDePagamento(e.target.value)}
                />
                <p>30 dias</p>
              </S.CheckContainer>

              <S.CheckContainer>
                <input 
                type='radio' 
                name='pagamento' 
                id='60'
                value="60 Dias"
                onChange={(e) => setCondicoesDePagamento(e.target.value)}
                 />
                <p>60 dias</p>
              </S.CheckContainer>

              <S.CheckContainer>
                <input 
                type='radio' 
                name='pagamento' 
                id='90'
                value="90 Dias"
                onChange={(e) => setCondicoesDePagamento(e.target.value)}
                />
                <p>90 dias</p>
              </S.CheckContainer>

              <S.CheckContainer>
                <input type='radio' name='pagamento' id='1200'
                onChange={(e) => setCondicoesDePagamento(e.target.value)}
                
                />
                <p>120 dias</p>
              </S.CheckContainer>
            </S.Check>
          </S.ContentSupplierFormCheckbox>

          <S.SelectItems>
            <label htmlFor='forma-de-pagamento'>Forma de pagamento</label>
            <select id='forma-de-pagamento'
              onChange={(e) => setFormadePagamento(e.target.value)}
            >
              <option value="Boleto" >Boleto</option>
              <option value="Cartão" >Cartão</option>
            </select>

            <label htmlFor='forma-de-pagamento'>Condição da empresa</label>
            <select id='forma-de-pagamento'
              onChange={(e) => setCondicaoEmpresa(e.target.value)}
            >
              <option value="Matriz">
                Matriz
              </option>
              <option value="Rede"  >
                Rede
              </option>
            </select>

            {/* {
              condicaoEmpresa == 'Rede' ? (
              <>
            <label htmlFor='forma-de-pagamento'>Rede</label>
            <select id='forma-de-pagamento'
              onChange={(e) => setCondicaoEmpresa(e.target.value)}
              >
              <option value="Matriz">
                Matriz
              </option>
              <option value="Rede"  >
                Rede
              </option>
            </select>
              </>
              ):(
            <>
              <label htmlFor='forma-de-pagamento'>Matriz // DEVE SER CRIADO NO BANCO????</label>
              <select id='forma-de-pagamento'
                onChange={(e) => setCondicaoEmpresa(e.target.value)}
                >
                <option value="Matriz">
                  Matriz
                </option>
                <option value="Rede"  >
                  Rede
                </option>
              </select>
            </>
              )
            } */}

            {/* <label htmlFor='matriz'>Matriz</label>
            <input type='text' id='matriz'
            onChange={(e) => setMatiz(e.target.value)}
            />

            <label htmlFor='rede'>Rede</label>
            <input type='text' id='rede'
            onChange={(e) => setRede(e.target.value)}
            /> */}
          </S.SelectItems>
          <S.Button>
          <button  style={{ background: '#AA2323' }}>
            Cancelar
          </button>
          <button
          type="submits"
          // onClick = { () => createProduct()}
          >Salvar</button>
        </S.Button>
        </S.RegisterSupplier>
      </S.ContainerRegisterSupplier>
    </>
  )
}
