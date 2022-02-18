import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCheck, FiTrash, FiPlus } from 'react-icons/fi'
import Navbar from '../../components/Sidebar/Sidebar'
import * as S from './styled'
import loadCategorias from '../../services/categoria/loadCategorias'
import deleteCategory from '../../services/categoria/deleteCategory'
import cadastrarCategory from '../../services/categoria/cadastrarCategory'
import changeCategorias from '../../services/categoria/changeCategorias'
import GenericInput from '../../components/GenericInput'
import GreenBtn from '../../components/GreenBtn'
import Modal from 'react-modal'
import LoadingGif from '../../components/LoadingGif'
import { AiOutlineClose } from "react-icons/ai";


export  default function Categories() {

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const [modalIsOpenCreate, setIsOpenCreate] = React.useState(false)
  const [modalIsOpenChange, setIsOpenChange] = React.useState(false)

  const [loading, setLoading] = useState(false);

  

  const [changeCategoryName, setChangeCategoryName] = useState('');
  const [id, setId] = useState('');


  function afterOpenModal() {}

  function closeModal() {
    setIsOpenCreate(false)
    setIsOpenChange(false)

  }

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

  async function handleCategoryCreate(e){
    setLoading(true)
    e.preventDefault()
    e.target.reset();  // reset all form data

    let data =  {
        nome: newCategory
      }
      await cadastrarCategory(data)
      loadData()
      setNewCategory("")
      closeModal()
      setLoading(false)
    }

  async function changeCategory(e){
    e.preventDefault()
    e.target.reset();  // reset all form data
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

        <div className='back'

        onClick={
          () => {
            // opens create modal!
            setIsOpenCreate(true)
          }
        }
        >
          <FiPlus />
        </div>
        <br/>
        {
          categories.map(
            (categorie) => (      
              <S.ContentApproveUser
              key={categorie.id}>
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
                  <S.FormContainer
                    onSubmit={(e) => changeCategory(e)}
                  >
                      <GenericInput
                      type='text'
                      onChange={(e) => setChangeCategoryName(e.target.value)}
                      />

                      <GreenBtn
                        type='submit'
                        content='Alterar'
                       />
                  </S.FormContainer>
              </S.ContentApproveUser>
            ) 
          )
        }
      </S.ContainerApprove>
    </>
  )
}
