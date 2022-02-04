import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiCheck, FiTrash } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import loadUsers from '../../services/loadUsers'

export  default function ApproveUser() {

  const [users, setUsers] = useState([]);

  async function load(){
    // valor passadados para o filter
    // let tenantIdUsers = await loadUsers('ativo', 'inativo')
    let tenantIdUsers = await loadUsers()
    setUsers(tenantIdUsers)
  }

  useEffect(
    () => {
      load()
    }, []
  )
  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        <h1>Aprovar usuários</h1>
        <Link className='back' to='/myproducts'>
          <FiChevronLeft />
        </Link>
        {
          users.map(
            (user) => (      
              <S.ContentApproveUser>
                <S.StoreUser>
                  <p>{user.fullName}</p>
                  <p>CNPJ: user.cnpj</p>
                  <p>user.email</p>
                  <p>user.telefone</p>
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
            ) 
          )
        }

        {/* <S.ContentApproveUser>
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
        </S.ContentApproveUser> */}

        {/* <S.ContentApproveUser>
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
        </S.ContentApproveUser> */}

        {/* <S.ContentApproveUser>
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
        </S.ContentApproveUser> */}

        {/* <S.ContentApproveUser>
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
        </S.ContentApproveUser> */}

        {/* <S.ContentApproveUser>
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
        </S.ContentApproveUser> */}
      </S.ContainerApprove>
    </>
  )
}
