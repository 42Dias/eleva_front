import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/logo.png'
import { apiWithoutTenant, loadingGif, porta, token,  id, ip} from '../../services/api'
import * as S from './styled'
import InputMask from 'react-input-mask';
import axios from 'axios'

import { toast } from 'react-toastify';


export  default function Register() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [category, setCategory] = useState('1');
  const [phoneNumber, setphoneNumber] = useState('')
  const [phoneMaskedNumber, setphoneMaskedNumber] = useState('')

  const [loading, setLoading] = useState(false);
  function handleLocalStorage(emailA, passwordB) {

    localStorage.setItem("email", JSON.stringify(emailA));//saves client's data into localStorage:
    localStorage.setItem("password", JSON.stringify(passwordB));//saves client's data into localStorage:
  }
  async function sendEmail() {
    // Axios.post(`${ip}:8157/api/cliente/${id}/${token}/verificarEmail`, {
    //   email: email
    // })
    apiWithoutTenant.post(`cliente/${id}/${token}/verificarEmail`)
    .then((response) => {
      if (response.statusText == "OK") {
        toast.info('Email enviado com sucesso!');
       
        setLoading(false)
        handleClickLogin();
      } 
      else {
        toast.error('Email não enviado com sucesso!');
      }
    });
  }


  console.log(token)


  async function loadUser(token) {
    const response = await axios({
      method: 'get',
      url: `${ip}:8144/api/auth/me`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      timeout: 50000
    }).then(response => {
      return response.data;
    })
    // let response = await apiWithoutTenant.get('auth/me').then(response => {
    //      return response.data;
    //   })
    console.log(response);
    // let setRole = response.tenants[0].roles
    // const roleHelper = JSON.parse(setRole)
    // console.log(roleHelper[0])
    // localStorage.setItem("roles", JSON.stringify(roleHelper[0])); //saves client's data into localStorage:
    localStorage.setItem("roles", response.tenants[0].roles[0]); //saves client's data into localStorage:

    console.log(response.tenants[0].tenant.id);
    localStorage.setItem("tenantId", JSON.stringify(response.tenants[0].tenant.id))
    localStorage.setItem("id", JSON.stringify(response.id))
    localStorage.setItem("status", JSON.stringify(response.tenants[0].status))
    // sendEmail();
  }
  function handleLocalStorageToken(token) {
    const setLocalStorage = (data) => {
      localStorage.setItem("token", JSON.stringify(data)); //saves client's data into localStorage:
    };
    setLocalStorage(token);
    loadUser(token)
  }

  function handleCreateUser(e) {
    e.preventDefault()

    toast.info('Carregando')

    const data = {
      nome,
      email,
      senha,
      role: parseInt(category),
      status: ''
      // category,
    }
    console.log(data)
    Cadastro()
  }
  async function Cadastro() {
    setLoading(true)
    apiWithoutTenant.post('auth/sign-up', {
        fullName: nome,
        email: email,
        password: senha,
        role: parseInt(category),
        status: ''
      })
      .then((response) => {
        //first check the http response, returning the result to user
        console.log(response)
        if (response.statusText === 'OK') {
          toast.info('Opa, recebemos o seu registro :)')
          console.log("ok")
          handleLocalStorage(email, senha)
          handleLocalStorageToken(response.data)
        } 
        else if (response.statusText === 'Forbidden') {
          console.log("Forbidden")

          toast.error('Ops, Não tem permisão!')
          setLoading(false)
        }
        else {
          toast.error('Ops, Dados Incorretos!')
          console.log("?")
          
          setLoading(false)

        }
      })
      .catch((res) => {
          console.log("catch")
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
            {/* <input
              required
              type='text'
              id='phoneNumber'
              placeholder='Número de telefone'
              onChange={(text) => setphoneNumber(text.target.value)}
            /> */}
            <InputMask
                    required
                    mask="(99) 9999-99999"
                    value={phoneMaskedNumber} 
                    onChange={
                      (e) => {
                        let celular = e.target.value
                        console.log(
                          celular.replace(/\D/g, '')
                          )
                          setphoneNumber(
                          celular.replace(/[\(\)\.\s-]+/g,'')
                          )
                        setphoneMaskedNumber(e.target.value)
                      }
                    }
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
            {
            loading ? (
            <img width="40px" 
            style={{ margin: 'auto' }}
            src={loadingGif}
            alt="Loading" />) : (
            <button 
            type="submit">
              Criar Conta
            </button>
            )
              }
          </S.FormRegister>
        </S.ContentRegister>
      </S.ContainerRegister>
    </>
  )
}