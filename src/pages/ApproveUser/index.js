import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiCheck, FiTrash, FiX } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import loadUsers from '../../services/loadUsers'
import loadEmpresas from '../../services/empresa/loadEmpresas'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import changeEmpresa from '../../services/empresa/changeEmpresa'
import sendEmailAprovado from '../../services/email/sendEmailAprovado'

export  default function ApproveUser() {

  const [users, setUsers] = useState([]);

  async function load(){
    // valor passadados para o filter
    // let tenantIdUsers = await loadUsers('ativo', 'inativo')
    let tenantIdUsers = await loadEmpresas('ativo', 'Inativo')
    setUsers(tenantIdUsers)
  }


  async function handleSendEmail(email){
    let data = {
      email: email
    }
    let isOK =  await sendEmailAprovado(data)
    console.log(isOK)
  }

  async function approve(id, userData){
    console.log(id)
    console.log("approve")
    let newUserData = {
      data: {
        ...userData,
        ativo: 'Ativo'
      }
    }
    console.log(newUserData)
    await changeEmpresa(id, newUserData)
    console.log(userData.email)
    await handleSendEmail(userData.email)
    
    load()
  }

  async function disapprove(id, userData){
    console.log(id)
    console.log("disapprove")
    let newUserData = {
      data: {
        ...userData,
        ativo: 'Ativo'
      }
    }
    await changeEmpresa(id, newUserData)
    // await handleSendEmail(newUserData.email)
    load()
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
              <S.ContentApproveUser
              key={
                user.id
              }>
                <S.StoreUser>
                  <p>{user.nomeFantasia}</p>
                  <p>CNPJ: {user.cnpj}</p>
                  <p>{user.email}</p>
                  <p>{user.telefone}</p>
                </S.StoreUser>
                <S.IconsActionsApprove>
                  <S.Check
                  onClick={
                    () => approve(user.id, user)
                  }
                  >
                    <Link>
                      <FiCheck />
                    </Link>
                  </S.Check>
                  <S.Trash
                  onClick={
                    () => disapprove(user.id, user)
                  }
                  >
                    <Link>
                      <FiX />
                      {/* <FiTrash /> */}
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
