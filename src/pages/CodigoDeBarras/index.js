import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiCheck, FiTrash } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import loadCodigoDeBarras from '../../services/codigoDeBarras/loadCodigoDeBarras'
import deleteCodigoDeBarras from '../../services/codigoDeBarras/deleteCodigoDeBarras'
import cadastrarCodigoDeBarras from '../../services/codigoDeBarras/cadastrarCodigoDeBarras'
import changeCodigoDeBarras from '../../services/codigoDeBarras/changeCodigoDeBarras'
// import loadCodigoDeBarras from '../../services/loadCodigoDeBarras'

export  default function CodigoDeBarras() {

  const [codigoDeBarrass, setCodigoDeBarras] = useState([]);
  const [newCodigoDeBarras, setNewCodigoDeBarras] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [changeCodigoDeBarrasName, setChangeCodigoDeBarrasName] = useState('');
  const [id, setId] = useState('');

  async function loadData(){
    let createdCodigoDeBarras = await loadCodigoDeBarras()
    setCodigoDeBarras(createdCodigoDeBarras)
  }

  async function handleDeleteCodigoDeBarras(id){
    console.log(id)

    await deleteCodigoDeBarras(id)
    loadData()
  }

  useEffect(
    () => {
      loadData()
    }, []
  )

  async function handleCodigoDeBarrasCreate(e){
    e.preventDefault()
    e.target.reset();  // Reset all form data

    let data =  {
        codigoDeBarras: newCodigoDeBarras,
      }
      await cadastrarCodigoDeBarras(data)
      loadData()
    }

  async function handleChangeCodigoDeBarras(e){
    e.preventDefault()
    e.target.reset();  // Reset all form data

    console.log(id)
    console.log(changeCodigoDeBarrasName)
    let data = {
      data:{
        nome: changeCodigoDeBarrasName,
      }
    }
    let res = await changeCodigoDeBarras(id, data)
    console.log(res)
    res == 'ok' ? loadData() : console.log('5465151654165160')
    
  }
  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        <h1>CodigoDeBarras</h1>

        <Link className='back'
        >
          <FiChevronLeft />
        </Link>
          <form
          onSubmit={(e) => {
            handleCodigoDeBarrasCreate(e)
          }}
          >
            <h2>
              Criar CodigoDeBarra
            </h2>
            <input 
              type="text"
              required
              onChange={(text) => setNewCodigoDeBarras(text.target.value)}
            />
            <button
            type='submit'
            >
              Enviar
            </button>
          </form>
        {
          codigoDeBarrass.map(
            (codigoDeBarra) => (      
              <S.ContentApproveUser key={codigoDeBarra.id}>
                <S.StoreUser>
                  <p>{codigoDeBarra.codigoDeBarras}</p>
                </S.StoreUser>
                <S.IconsActionsApprove>
                  <S.Check
                  onClick={
                    () => setId(codigoDeBarra.id)
                  }
                  >
                    <Link>
                      <FiCheck
                      />
                    </Link>
                  </S.Check>
                  <S.Trash
                  onClick={() => {
                    handleDeleteCodigoDeBarras(codigoDeBarra.id)
                  }}>
                    <Link>
                      <FiTrash/>
                    </Link>
                  </S.Trash>
                </S.IconsActionsApprove>
                  <form 
                  onSubmit={(e) => handleChangeCodigoDeBarras(e)}
                  >
                    <input
                    type='text'
                    onChange={(e) => setChangeCodigoDeBarrasName(e.target.value)}
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
