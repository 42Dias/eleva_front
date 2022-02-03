import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiCheck, FiTrash } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import loadCategories from '../../services/loadCategories'
import loadCategorias from '../../services/loadCategorias'
import deleteCategory from '../../services/deleteCategory'
import cadastrarCategory from '../../services/cadastrarCategory'

export  default function Categories() {

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);


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
                  <S.Check>
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
              </S.ContentApproveUser>
            ) 
          )
        }
      </S.ContainerApprove>
    </>
  )
}
