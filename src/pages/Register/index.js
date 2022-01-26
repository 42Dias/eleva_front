import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";

import LOGO from '../../assets/logo.png'
import { apiWithoutTenant, loadingGif, porta, token,  id, ip, apiWithoutTenantAndWithToken} from '../../services/api'

import loadUser from '../../services/loadUser' 

import * as S from './styled'
import InputMask from 'react-input-mask';
import axios from 'axios'



import cadastro from '../../services/cadastro'

import { toast } from 'react-toastify';


export  default function Register() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [category, setCategory] = useState('1');
  const [phoneNumber, setphoneNumber] = useState('')
  const [phoneMaskedNumber, setphoneMaskedNumber] = useState('')

  const [loading, setLoading] = useState(false);
  
  let history = useHistory();

  function goHome() {
    history.push("/home");
  }

  function handleCreateUser(e) {
    e.preventDefault()

    toast.info('Carregando')
    setLoading(true)

    // email senha role e status
    cadastro(nome, email, senha, parseInt(category), '')
    .then(
      (cadastroStatus) => {
        setLoading(false)
        cadastroStatus == 'ok' ? goHome() : toast.error("Algo deu errado :(")
      }
    )
    .catch(
      () => setLoading(false)
    )
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
// async function sendEmail() {
//   // Axios.post(`${ip}:8157/api/cliente/${id}/${token}/verificarEmail`, {
//   //   email: email
//   // })
//   apiWithoutTenant.post(`cliente/${id}/${token}/verificarEmail`)
//   .then((response) => {
//     if (response.statusText == "OK") {
//       toast.info('Email enviado com sucesso!');
     
//       setLoading(false)
//       handleClickLogin();
//     } 
//     else {
//       toast.error('Email não enviado com sucesso!');
//     }
//   });
// }