import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/logo.png'
import { apiWithoutTenant } from '../../services/api'
import * as S from './styled'

export function Register() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [category, setCategory] = useState('1');
  const [phoneNumber, setphoneNumber] = useState('')

  console.log("register")

  function handleCreateUser(e) {
    e.preventDefault()

    const data = {
      nome,
      email,
      senha,
      // category,
    }
    console.log(data)
    Cadastro()
  }
  async function Cadastro() {
    setLoading(true)
    const responser = apiWithoutTenant
      .post('auth/sign-up', {
        fullName: nome,
        email: email,
        password: senha,
        role: parseInt(category),
        status: '',
      })
      .then((response) => {
        //first check the http response, returning the result to user
        console.log(response)
        if (response.statusText === 'OK') {
          toast.info('Opa, recebemos o seu registro :)')
          handleLocalStorage(email, senha)
          handleLocalStorageToken(response.data)
        } 
        else if (response.statusText === 'Forbidden') {
          toast.error('Ops, Não tem permisão!')
          setLoading(false)
        }
        else {
          toast.error('Ops, Dados Incorretos!')
          setLoading(false)
        }
      })
      .catch((res) => {
        console.log(res)
        toast.error('ERROR')
        setLoading(false)
      })
  }

  return (
    <>
      <S.ContainerRegister>
        <S.ContentRegister>
          <img src={LOGO} alt='' />
          <h2>Cadastre-se</h2>

          <S.FormRegister onSubmit={handleCreateUser}>
            <label htmlFor='nome'>Nome</label>
            <input
              required
              type='text'
              id='nome'
              placeholder='Nome'
              onChange={(text) => setNome(text.target.value)}
            />
            <label htmlFor='phoneNumber'>Número de telefone</label>
            <input
              required
              type='text'
              id='phoneNumber'
              placeholder='Número de telefone'
              onChange={(text) => setphoneNumber(text.target.value)}
            />
            <label htmlFor='email'>E-mail</label>
            <input
              required
              type='email'
              id='email'
              placeholder='E-mail'
              onChange={(text) => setEmail(text.target.value)}
            />
            <label htmlFor='senha'>Senha</label>
            <input
              required
              type='password'
              id='senha'
              placeholder='Senha'
              onChange={(text) => setSenha(text.target.value)}
            />
            <div>
              <label htmlFor="cadastrar">Cadastrar como:</label>

              <select
                required
                value={category}
                onChange={event => setCategory(event.target.value)}
              >
                <option value={"1"}>Cliente</option>
                <option value={"2"}>Empresa</option>
                <option value={"3"}>Admin</option>
              </select>
            </div>
            <div className='checkbox'>
              <input required type='checkbox' name='' id='' />
              <p>
                Aceito os <Link to='/aceitar-termos'>Termos e condições</Link> e
                autorizo o uso de meus dados de acordo com a Declaração de
                privacidade.
              </p>
            </div>
            <button
              className='link'
              // to='/myproducts'
              onSubmit={(e) => {
                // e.preventDefault
                handleCreateUser(e)
              }}
            >
              Criar conta
            </button>
          </S.FormRegister>
        </S.ContentRegister>
      </S.ContainerRegister>
    </>
  )
}