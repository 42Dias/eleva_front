import React from 'react'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

export function RegisterSupplier() {
  return (
    <>
      <Navbar />
      <S.ContainerRegisterSupplier>
        <S.RegisterSupplier>
          <h2>Novo fornecedor</h2>

          <S.RegisterSupplierForm>
            <S.ContentSupplierForm>
              <label htmlFor='codigo'>Código</label>
              <input type='text' id='codigo' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='razao-social'>Razão social</label>
              <input type='text' id='razao-social' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='nome-fantasia'>Nome fantasia</label>
              <input type='text' id='nome-fantasia' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cnpj'>CNPJ</label>
              <input type='text' id='cnpj' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='inscricao-estadual'>Inscrição estadual</label>
              <input type='text' id='inscricao-estadual' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='inscricao-municipal'>Inscrição municipal</label>
              <input type='text' id='inscricao-municipal' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cnae-principal'>Cnae principal</label>
              <input type='text' id='cnae-principal' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cnae-secundario'>Cnae secundário</label>
              <input type='text' id='cnae-secundario' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='logradouro'>Logradouro</label>
              <input type='text' id='logradouro' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='numero'>Número</label>
              <input type='text' id='numero' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='bairro'>Bairro</label>
              <input type='text' id='bairro' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='cidade'>Cidade</label>
              <input type='text' id='cidade' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='estado'>Estado</label>
              <input type='text' id='estado' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='complemento'>Complemento</label>
              <input type='text' id='complemento' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='telefone'>Telefone</label>
              <input type='text' id='telefone' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='telefone-secundario'>Telefone secundário</label>
              <input type='text' id='telefone-secundario' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='email-da-empresa'>Email da empresa</label>
              <input type='email' id='email-da-empresa' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='perfil-comercial'>Perfil comercial</label>
              <input type='text' id='perfil-comercial' />
            </S.ContentSupplierForm>
          </S.RegisterSupplierForm>
          <S.ContentSupplierForm>
            <S.LeadTime>
              <label htmlFor='lead-time'>Lead time</label>
              <input type='text' id='lead-time' />
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
                  <input type='text' id='nome-do-responsável-comercial' />
                </S.StoreResponsavel>

                <S.StoreResponsavel>
                  <label htmlFor='telefone-do-responsável'>
                    Telefone do responsável
                  </label>
                  <input type='text' id='telefone-do-responsável' />
                </S.StoreResponsavel>
              </S.Responsavel>

              <S.ResponsavelAlone>
                <label htmlFor='email-do-responsavel'>
                  E-mail do responsável
                </label>
                <input type='email' id='email-do-responsavel' />
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
                <input type='checkbox' name='' id='' />
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
        </S.RegisterSupplier>
      </S.ContainerRegisterSupplier>
    </>
  )
}
