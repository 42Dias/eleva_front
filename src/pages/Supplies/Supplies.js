import React from 'react'
import { Switch } from 'antd'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import 'antd/dist/antd.css'

export function Supplies() {
  return (
    <>
      <Navbar />
      <S.ContainerDetails>
        <h2>Suprimentos</h2>
        <button>Comprar 🤑</button>
        <button>Filtros</button>
        <table>
          <thead>
            <tr className='firts'>
              <th>Cod. barras</th>
              <th>Produto SKU</th>
              <th>Código</th>
              <th>Nome</th>
              <th>Armazem</th>
            </tr>
          </thead>

          <tbody className='body'>
            <tr>
              <td>123123412</td>
              <td>Macbook </td>
              <td>XXXXX</td>
              <td>Macbook Pro M1X</td>
              {/* <td>400</td> */}
              <Switch
                // checkedChildren='adcionar'
                // unCheckedChildren='adicionado'
                checkedChildren='Adicionado'
                unCheckedChildren='Adicionar'
              />
            </tr>
            <tr>
              <td>123123412</td>
              <td>Macbook </td>
              <td>XXXXX</td>
              <td>Macbook Pro M1X</td>
              {/* <td>400</td> */}
              <Switch
                checkedChildren='Adicionado'
                unCheckedChildren='Adicionar'
              />
            </tr>
            <tr>
              <td>123123412</td>
              <td>Macbook </td>
              <td>XXXXX</td>
              <td>Macbook Pro M1X</td>
              {/* <td>400</td> */}
              <Switch
                checkedChildren='Adicionado'
                unCheckedChildren='Adicionar'
              />
            </tr>
            <tr>
              <td>123123412</td>
              <td>Macbook </td>
              <td>XXXXX</td>
              <td>Macbook Pro M1X</td>
              {/* <td>400</td> */}
              <Switch
                checkedChildren='Adicionado'
                unCheckedChildren='Adicionar'
              />
            </tr>
          </tbody>
        </table>
      </S.ContainerDetails>
    </>
  )
}
