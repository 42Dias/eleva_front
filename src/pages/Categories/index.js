import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCheck, FiTrash, FiPlus, FiEdit } from 'react-icons/fi'
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
    console.log(id)
    console.log(changeCategoryName)
    let data = {
      data:{
        nome: changeCategoryName
      }
    }
    e.target.reset();  // reset all form data
    closeModal()
    let res = await changeCategorias(id, data)
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
                    () => {
                      setId(categorie.id)
                      setIsOpenChange(true)
                      setChangeCategoryName(categorie.nome)
                    }
                  }
                  >
                    <Link>
                      <FiEdit
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

    <S.ModalContainer>
        <Modal
          isOpen={modalIsOpenCreate}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        >
          <div>
            <S.ModalFlex>
              <AiOutlineClose onClick={closeModal} />
            </S.ModalFlex>

            <S.ModalContent
            onSubmit={e => handleCategoryCreate(e)}
            >
              <h3>Nova Categoria</h3>

              <S.ContentFormNew>
                <label htmlFor="">Nova Categoria</label>
                <input
                  required
                  value={changeCategoryName}
                  type="text"
                  onChange={(text) => setChangeCategoryName(text.target.value)}
                />
              </S.ContentFormNew>
              {loading ? (
                <LoadingGif />
              ) : false}
              <div className="buttonsNew">
                <button type="button" 
                onClick={
                  () => {
                    // messageCancel()
                    closeModal()
                  }
                  }>
                  Cancelar
                </button>
                {/* <button type="submit">
                  Adicionar
                </button> */}
                <GreenBtn
                  type='submit'
                  content='Adicionar'
                />
              </div>
            </S.ModalContent>
          </div>
        </Modal>
      </S.ModalContainer>


      <S.ModalContainer>
        <Modal
          isOpen={modalIsOpenCreate}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        >
          <div>
            <S.ModalFlex>
              <AiOutlineClose onClick={closeModal} />
            </S.ModalFlex>

            <S.ModalContent
            onSubmit={e => handleCategoryCreate(e)}
            >
              <h3>Nova Categoria</h3>

              <S.ContentFormNew>
                <label htmlFor="">Nova Categoria</label>
                <input
                  required
                  value={newCategory}
                  type="text"
                  onChange={(text) => setNewCategory(text.target.value)}
                />
              </S.ContentFormNew>
              {loading ? (
                <LoadingGif />
              ) : (
              <div className="buttonsNew">
                <button type="button" 
                onClick={
                  () => {
                    // messageCancel()
                    closeModal()
                  }
                  }>
                  Cancelar
                </button>
                {/* <button type="submit">
                  Adicionar
                </button> */}
                <GreenBtn
                  type='submit'
                  content='Adicionar'
                />
            </div>
            )}
            </S.ModalContent>
          </div>
        </Modal>
      </S.ModalContainer>


      <S.ModalContainer>
        <Modal
          isOpen={modalIsOpenChange}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        >
          <div>
            <S.ModalFlex>
              <AiOutlineClose onClick={closeModal} />
            </S.ModalFlex>

            <S.ModalContent
            onSubmit={e => changeCategory(e)}
            >
              <h3>Alterar categoria</h3>

              <S.ContentFormNew>
                <label htmlFor="">Novo Nome</label>
                <input
                  required
                  value={changeCategoryName}
                  type="text"
                  onChange={(text) => setChangeCategoryName(text.target.value)}
                />
              </S.ContentFormNew>
              {loading ? (
                <LoadingGif />
              ) : (
              <div className="buttonsNew">
                <button type="button" 
                onClick={
                  () => {
                    // messageCancel()
                    closeModal()
                  }
                  }>
                  Cancelar
                </button>
                {/* <button type="submit">
                  Adicionar
                </button> */}
                <GreenBtn
                  type='submit'
                  content='Adicionar'
                />
            </div>
            )}
            </S.ModalContent>
          </div>
        </Modal>
      </S.ModalContainer>

      </S.ContainerApprove>
    </>
  )
}
