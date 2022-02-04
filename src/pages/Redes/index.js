import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiCheck, FiTrash } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import loadRedes from '../../services/rede/loadRedes'
import deleteRedes from '../../services/rede/deleteRedes'
import cadastrarRedes from '../../services/rede/cadastrarRedes'
import changeRedes from '../../services/rede/changeRedes'
// import loadRedes from '../../services/loadRedes'

export  default function Redes() {

  const [redes, setRedes] = useState([]);
  const [newRedes, setNewRedes] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [changeRedesName, setChangeRedesName] = useState('');
  const [id, setId] = useState('');

  async function loadData(){
    let createdRedes = await loadRedes()
    setRedes(createdRedes)
  }

  async function handleDeleteRedes(id){
    console.log(id)

    await deleteRedes(id)
    loadData()
  }

  useEffect(
    () => {
      loadData()
    }, []
  )

  async function handleRedesCreate(e){
    e.preventDefault()
    e.target.reset();  // Reset all form data

    let data =  {
        nome: newRedes,
        ativo: true,
      }
      await cadastrarRedes(data)
      loadData()
    }

  async function handleChangeRedes(e){
    e.preventDefault()
    e.target.reset();  // Reset all form data

    console.log(id)
    console.log(changeRedesName)
    let data = {
      data:{
        nome: changeRedesName,
      }
    }
    let res = await changeRedes(id, data)
    console.log(res)
    res == 'ok' ? loadData() : console.log('5465151654165160')
    
  }
  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        <h1>Redes</h1>

        <Link className='back'
        >
          <FiChevronLeft />
        </Link>
          <form
          onSubmit={(e) => {
            handleRedesCreate(e)
          }}
          >
            <h2>
              Criar Rede
            </h2>
            <input 
              type="text"
              required
              onChange={(text) => setNewRedes(text.target.value)}
            />
            <button
            type='submit'
            >
              Enviar
            </button>
          </form>
        {
          redes.map(
            (categorie) => (      
              <S.ContentApproveUser>
                <S.StoreUser>
                  <p>{categorie.nome}</p>
                </S.StoreUser>
                <S.IconsActionsApprove>
                  <S.Check
                  onClick={
                    () => setId(categorie.id)
                  }
                  >
                    <Link>
                      <FiCheck
                      />
                    </Link>
                  </S.Check>
                  <S.Trash
                  onClick={() => {
                    handleDeleteRedes(categorie.id)
                  }}>
                    <Link>
                      <FiTrash/>
                    </Link>
                  </S.Trash>
                </S.IconsActionsApprove>
                  <form 
                  onSubmit={(e) => handleChangeRedes(e)}
                  >
                    <input
                    type='text'
                    onChange={(e) => setChangeRedesName(e.target.value)}
                    />
                    <button
                    type='submit'>
                      Alterar
                    </button>
                  </form>
              </S.ContentApproveUser>
            ) 
          )
        }
      </S.ContainerApprove>
    </>
  )
}
