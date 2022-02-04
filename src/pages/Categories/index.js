import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiCheck, FiTrash } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import loadCategorias from '../../services/loadCategorias'
import deleteCategory from '../../services/deleteCategory'
import cadastrarCategory from '../../services/cadastrarCategory'
import changeCategorias from '../../services/changeCategorias'

export  default function Categories() {

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [changeCategoryName, setChangeCategoryName] = useState('');
  const [id, setId] = useState('');

  async function loadData(){
    loadCategorias(setCategories)
  }

  async function handleDeleteCategory(id){
    console.log(id)

    await deleteCategory(id)
    loadData()
  }

  useEffect(
    () => {
      loadData()
    }, []
  )

  function handleCategoryCreate(newCategory){
    console.log(newCategory)

    let data =  {
        nome: newCategory
      }
      cadastrarCategory(data)
    }

  async function changeCategory(e){
    e.preventDefault()
    console.log(id)
    console.log(changeCategoryName)
    let data = {
      data:{
        nome: changeCategoryName
      }
    }
    let res = await changeCategorias(id, data)
    console.log(res)
    res == 'ok' ? loadData() : console.log('5465151654165160')
    
  }
  return (
    <>
      <Navbar />
      <S.ContainerApprove>
        <h1>Categorias</h1>

        <Link className='back'
        >
          <FiChevronLeft />
        </Link>
          <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log(newCategory)
            handleCategoryCreate(newCategory)
          }}
          >
            <h2>
              Criar Categoria
            </h2>
            <input 
              type="text"
              required
              onChange={(text) => setNewCategory(text.target.value)}
            />
            <button
            type='submit'
            >
              Enviar
            </button>
          </form>
        {
          categories.map(
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
                    handleDeleteCategory(categorie.id)
                  }}>
                    <Link>
                      <FiTrash/>
                    </Link>
                  </S.Trash>
                </S.IconsActionsApprove>
                  <form 
                  onSubmit={(e) => changeCategory(e)}
                  >
                    <input
                    type='text'
                    onChange={(e) => setChangeCategoryName(e.target.value)}
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
