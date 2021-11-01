import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Sidebar/Sidebar'
// import Footer from './../../components/Footer'
import IMAGE from '../../assets/upload.png'
import * as S from './styled'

export function RegisterProduct() {
  return (
    <>
      <Navbar />
      <S.ContainerRegisterSupplier>
        <S.BoxImage>
          <img src={IMAGE} alt='upload image' />
        </S.BoxImage>
        <S.RegisterSupplier>
          <h2>Novo produto</h2>

          <S.RegisterSupplierForm>
            <S.ContentSupplierForm>
              <label htmlFor='name-product'>Nome do produto</label>
              <input type='text' id='name-product' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='code'>Código</label>
              <input type='text' id='code' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='description'>Descrição</label>
              <input type='text' id='description' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ref'>Referência técnica</label>
              <input type='text' id='ref' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='material'>Tipo de material</label>
              <input type='text' id='material' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='inactivity'>Data de inatividade</label>
              <input type='text' id='inactivity' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='category'>Categoria</label>
              <input type='text' id='category' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='stock'>Quantia em estoque</label>
              <input type='text' id='stock' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='demand'>Demanda</label>
              <input type='text' id='demand' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='safety-stock'>Estoque de segurança</label>
              <input type='text' id='safety-stock' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='maximum-stock'>Estoque máximo</label>
              <input type='text' id='maximum-stock' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='minimum-module'>Módulo mínimo</label>
              <input type='text' id='minimum-module' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='brand'>Marca</label>
              <input type='text' id='brand' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='minimum-delivery'>Entrega mínima</label>
              <input type='email' id='minimum-delivery' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='minimum-order'>Pedido mínimo (Quant/Valor)</label>
              <input type='text' id='minimum-order' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='price'>Preço</label>
              <input type='text' id='price' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='height'>Altura(cm)</label>
              <input type='text' id='height' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='length'>Comprimento(cm)</label>
              <input type='text' id='length' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='packaging'>Cubagem da embalagem</label>
              <input type='text' id='packaging' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='width'>Largura(cm)</label>
              <input type='text' id='width' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='gross-weight'>Peso bruto(g)</label>
              <input type='text' id='gross-weight' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='liquid-weight'>Peso líquido(g)</label>
              <input type='text' id='liquid-weight' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='last-sale'>Data da última venda</label>
              <input type='date' id='last-sale' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='first-sale'>Data da primeira venda</label>
              <input type='date' id='first-sale' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ncm'>NCM</label>
              <input type='text' id='ncm' />
            </S.ContentSupplierForm>

            <S.ContentSupplierForm>
              <label htmlFor='ncm-description'>Descrição NCM</label>
              <input type='text' id='ncm-description' />
            </S.ContentSupplierForm>
          </S.RegisterSupplierForm>

          <S.ContentSupplierFormRadio>
            <span>Rede SKU</span>
            <S.Radio>
              <S.RadioContainer>
                <input type='radio' name='' id='' />
                <p>Sim</p>
              </S.RadioContainer>

              <S.RadioContainer>
                <input type='radio' name='' id='' />
                <p>Não</p>
              </S.RadioContainer>
            </S.Radio>
          </S.ContentSupplierFormRadio>

          <S.ContentSupplierFormRadio>
            <span>Origem do produto</span>
            <S.Radio>
              <S.RadioContainer>
                <input type='radio' name='' id='' />
                <p>Nacional</p>
              </S.RadioContainer>

              <S.RadioContainer>
                <input type='radio' name='' id='' />
                <p>Importado</p>
              </S.RadioContainer>
            </S.Radio>
          </S.ContentSupplierFormRadio>

          <S.ContentSupplierForm>
            <S.LeadTime>
              <label htmlFor='lead-time'>Lead time</label>
              <input type='text' id='lead-time' />
            </S.LeadTime>
          </S.ContentSupplierForm>

          <S.SelectItems>
            <label htmlFor='product-sku'>Produto SKU</label>
            <select id='product-sku'>
              <option>informação 1</option>
              <option>informação 2</option>
            </select>

            <label htmlFor='bar-code'>Código de barras</label>
            <select id='bar-code'>
              <option>informação 1</option>
              <option>informação 2</option>
            </select>

            <label htmlFor='unit-of-measurement'>Unidade de medida</label>
            <select id='unit-of-measurement'>
              <option>informação 1</option>
              <option>informação 2</option>
            </select>
          </S.SelectItems>
        </S.RegisterSupplier>
        <Link to='/home' style={{ background: '#AA2323' }}>
          Cancelar
        </Link>
        <Link to='/home'>Salvar</Link>
      </S.ContainerRegisterSupplier>
    </>
  )
}
