import React, { useState ,useEffect, useRef, useCallback } from "react";
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

import cepInformation from '../../utils/cepInformation'

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
 const [condicoesDePagamento        , setCondicoesDePagamento] = useState('') 
 const [formadePagamento            , setFormadePagamento] = useState('')

  function handleChangeCEP(e){
    const cep = e.replace(/[^0-9]/g, '')

    if(cep.length == 8){
      const data = cepInformation(ev)
      setCep(data.cep)
      setLogradouro(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setEstado(data.uf) 
    }
  }

  return (
    <>
      <Navbar />
      <S.ContainerRegisterSupplier
      onSubmit= { () => createProduct()}
      >
        <S.RegisterSupplier>
          <h2>Novo fornecedor</h2>

          <S.RegisterSupplierForm>
            <S.ContentSupplierForm>
              <label htmlFor='codigo'>Código</label>
              <input type='text' id='codigo'
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='razao-social'>Razão social</label>
              <input type='text' id='razao-social'
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='nome-fantasia'>Nome fantasia</label>
              <input type='text' id='nome-fantasia' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cnpj'>CNPJ</label>
              <input type='text' id='cnpj'
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='inscricao-estadual'>Inscrição estadual</label>
              <input type='text' id='inscricao-estadual'
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='inscricao-municipal'>Inscrição municipal</label>
              <input type='text' id='inscricao-municipal'
              onChange={(e) => setCodigo(e.target.value)}
               />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cnae-principal'>Cnae principal</label>
              <input type='text' id='cnae-principal'
              onChange={(e) => setCodigo(e.target.value)}
               />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cnae-secundario'>Cnae secundário</label>
              <input type='text' id='cnae-secundario' 
              onChange={(e) => setCodigo(e.target.value)}/>
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='logradouro'>CEP</label>
              <input type='text' id='logradouro'
              // onBlur={(ev) => handleChangeCEP(ev)}
              onChange={(text) => handleChangeCEP(text.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='logradouro'>Logradouro</label>
              <input type='text' id='logradouro'
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='numero'>Número</label>
              <input type='text' id='numero'
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='bairro'>Bairro</label>
              <input type='text' id='bairro' 
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cidade'>Cidade</label>
              <input type='text' id='cidade'
              onChange={(e) => setCodigo(e.target.value)}
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
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='telefone'>Telefone</label>
              <input type='text' id='telefone' 
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='telefone-secundario'>Telefone secundário</label>
              <input type='text' id='telefone-secundario' 
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='email-da-empresa'>Email da empresa</label>
              <input type='email' id='email-da-empresa'
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='perfil-comercial'>Perfil comercial</label>
              <input type='text' id='perfil-comercial'
              onChange={(e) => setCodigo(e.target.value)}
              />
            </S.ContentSupplierForm>
          </S.RegisterSupplierForm>
          <S.ContentSupplierForm>
            <S.LeadTime>
              <label htmlFor='lead-time'>Lead time</label>
              <input type='text' id='lead-time'
              onChange={(e) => setCodigo(e.target.value)}
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
                  <input type='text' id='nome-do-responsável-comercial'
                  onChange={(e) => setCodigo(e.target.value)} />
                </S.StoreResponsavel>

                <S.StoreResponsavel>
                  <label htmlFor='telefone-do-responsável'>
                    Telefone do responsável
                  </label>
                  <input type='text' id='telefone-do-responsável'
                  onChange={(e) => setCodigo(e.target.value)}
                   />
                </S.StoreResponsavel>
              </S.Responsavel>

              <S.ResponsavelAlone>
                <label htmlFor='email-do-responsavel'>
                  E-mail do responsável
                </label>
                <input type='email' id='email-do-responsavel'
                onChange={(e) => setCodigo(e.target.value)} />
              </S.ResponsavelAlone>
            </S.ContainerResponsavel>
          </S.ContentResponsavel>

          <S.ContentSupplierFormCheckbox>
            <span>Condições de pagamento</span>
            <S.Check>
              <S.CheckContainer>
                <input type='checkbox' name='' id='' />
                <p>30 dias</p>
              </S.CheckContainer>

              <S.CheckContainer>
                <input type='checkbox' name='' id='' />
                <p>60 dias</p>
              </S.CheckContainer>

              <S.CheckContainer>
                <input type='checkbox' name='' id='' />
                <p>90 dias</p>
              </S.CheckContainer>

              <S.CheckContainer>
                <input type='radio' name='pagamento' id='1200' />
                <p>120 dias</p>
              </S.CheckContainer>
            </S.Check>
          </S.ContentSupplierFormCheckbox>

          <S.SelectItems>
            <label htmlFor='forma-de-pagamento'>Forma de pagamento</label>
            <select id='forma-de-pagamento'>
              <option>Boleto</option>
              <option>Cartão</option>
            </select>

            <label htmlFor='matriz'>Matriz</label>
            <input type='text' id='matriz' />

            <label htmlFor='rede'>Rede</label>
            <input type='text' id='rede' />
          </S.SelectItems>
          <S.Button>
          <button  style={{ background: '#AA2323' }}>
            Cancelar
          </button>
          <button
          onClick = { () => createProduct()}
          >Salvar</button>
        </S.Button>
        </S.RegisterSupplier>
      </S.ContainerRegisterSupplier>
    </>
  )
}
