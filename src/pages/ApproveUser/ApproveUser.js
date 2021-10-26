import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiCheck, FiTrash } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'

export function ApproveUser() {
  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        <h1>Aprovar usuários</h1>
        <Link className='back' to='/myproducts'>
          <FiChevronLeft />
        </Link>

        <S.ContentApproveUser>
          <S.StoreUser>
            <p>Luciano</p>
            <p>CNPJ: XX. XXX. XXX/0001-XX.</p>
            <p>Luciano@gmail.com</p>
            <p>Telefone: (12) 9 9999-9999</p>
          </S.StoreUser>
          <S.IconsActionsApprove>
            <S.Check>
              <Link>
                <FiCheck />
              </Link>
            </S.Check>
            <S.Trash>
              <Link>
                <FiTrash />
              </Link>
            </S.Trash>
          </S.IconsActionsApprove>
        </S.ContentApproveUser>

        <S.ContentApproveUser>
          <S.StoreUser>
            <p>Luciano</p>
            <p>CNPJ: XX. XXX. XXX/0001-XX.</p>
            <p>Luciano@gmail.com</p>
            <p>Telefone: (12) 9 9999-9999</p>
          </S.StoreUser>
          <S.IconsActionsApprove>
            <S.Check>
              <Link>
                <FiCheck />
              </Link>
            </S.Check>
            <S.Trash>
              <Link>
                <FiTrash />
              </Link>
            </S.Trash>
          </S.IconsActionsApprove>
        </S.ContentApproveUser>

        <S.ContentApproveUser>
          <S.StoreUser>
            <p>Luciano</p>
            <p>CNPJ: XX. XXX. XXX/0001-XX.</p>
            <p>Luciano@gmail.com</p>
            <p>Telefone: (12) 9 9999-9999</p>
          </S.StoreUser>
          <S.IconsActionsApprove>
            <S.Check>
              <Link>
                <FiCheck />
              </Link>
            </S.Check>
            <S.Trash>
              <Link>
                <FiTrash />
              </Link>
            </S.Trash>
          </S.IconsActionsApprove>
        </S.ContentApproveUser>

        <S.ContentApproveUser>
          <S.StoreUser>
            <p>Luciano</p>
            <p>CNPJ: XX. XXX. XXX/0001-XX.</p>
            <p>Luciano@gmail.com</p>
            <p>Telefone: (12) 9 9999-9999</p>
          </S.StoreUser>
          <S.IconsActionsApprove>
            <S.Check>
              <Link>
                <FiCheck />
              </Link>
            </S.Check>
            <S.Trash>
              <Link>
                <FiTrash />
              </Link>
            </S.Trash>
          </S.IconsActionsApprove>
        </S.ContentApproveUser>

        <S.ContentApproveUser>
          <S.StoreUser>
            <p>Luciano</p>
            <p>CNPJ: XX. XXX. XXX/0001-XX.</p>
            <p>Luciano@gmail.com</p>
            <p>Telefone: (12) 9 9999-9999</p>
          </S.StoreUser>
          <S.IconsActionsApprove>
            <S.Check>
              <Link>
                <FiCheck />
              </Link>
            </S.Check>
            <S.Trash>
              <Link>
                <FiTrash />
              </Link>
            </S.Trash>
          </S.IconsActionsApprove>
        </S.ContentApproveUser>

        <S.ContentApproveUser>
          <S.StoreUser>
            <p>Luciano</p>
            <p>CNPJ: XX. XXX. XXX/0001-XX.</p>
            <p>Luciano@gmail.com</p>
            <p>Telefone: (12) 9 9999-9999</p>
          </S.StoreUser>
          <S.IconsActionsApprove>
            <S.Check>
              <Link>
                <FiCheck />
              </Link>
            </S.Check>
            <S.Trash>
              <Link>
                <FiTrash />
              </Link>
            </S.Trash>
          </S.IconsActionsApprove>
        </S.ContentApproveUser>
      </S.ContainerApprove>
    </>
  )
}
