import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiCheck, FiTrash } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import loadEspecialidades from '../../services/especialidade/loadEspecialidades'
import deleteEspecialidades from '../../services/especialidade/deleteEspecialidades'
import cadastrarEspecialidades from '../../services/especialidade/cadastrarEspecialidades'
import changeEspecialidades from '../../services/especialidade/changeEspecialidades'
// import loadEspecialidades from '../../services/loadEspecialidades'

export  default function Especialidades() {

  const [especialidades, setEspecialidades] = useState([]);
  const [newEspecialidades, setNewEspecialidades] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [changeEspecialidadesName, setChangeEspecialidadesName] = useState('');
  const [id, setId] = useState('');

  async function loadData(){
    let createdEspecialidades = await loadEspecialidades()
    setEspecialidades(createdEspecialidades)
  }

  async function handleDeleteEspecialidades(id){
    console.log(id)

    await deleteEspecialidades(id)
    loadData()
  }

  useEffect(
    () => {
      loadData()
    }, []
  )

  async function handleEspecialidadesCreate(e){
    e.preventDefault()
    e.target.reset();  // Reset all form data

    let data =  {
        nome: newEspecialidades,
        ativo: true,
      }
      await cadastrarEspecialidades(data)
      loadData()
    }

  async function handleChangeEspecialidades(e){
    e.preventDefault()
    e.target.reset();  // Reset all form data

    console.log(id)
    console.log(changeEspecialidadesName)
    let data = {
      data:{
        nome: changeEspecialidadesName,
      }
    }
    let res = await changeEspecialidades(id, data)
    console.log(res)
    res == 'ok' ? loadData() : console.log('5465151654165160')
    
  }
  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        <h1>Especialidades</h1>

        <Link className='back'
        >
          <FiChevronLeft />
        </Link>
          <form
          onSubmit={(e) => {
            handleEspecialidadesCreate(e)
          }}
          >
            <h2>
              Criar Especialidade
            </h2>
            <input 
              type="text"
              required
              onChange={(text) => setNewEspecialidades(text.target.value)}
            />
            <button
            type='submit'
            >
              Enviar
            </button>
          </form>
        {
          especialidades.map(
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
                    handleDeleteEspecialidades(categorie.id)
                  }}>
                    <Link>
                      <FiTrash/>
                    </Link>
                  </S.Trash>
                </S.IconsActionsApprove>
                  <form 
                  onSubmit={(e) => handleChangeEspecialidades(e)}
                  >
                    <input
                    type='text'
                    onChange={(e) => setChangeEspecialidadesName(e.target.value)}
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
