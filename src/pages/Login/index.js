import React, { useState } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link, useHistory } from 'react-router-dom'
import { FiLock, FiMoreHorizontal } from 'react-icons/fi'
import LOGO from '../../assets/logo.png'
import * as S from './styled'
import {  loadingGif } from '../../services/api'
import login from '../../services/login'
import { toast } from "react-toastify";



export default function Login() {

  let history = useHistory();


  function goHome() {
    history.push("/home");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  // function handleLogin(e){
  //   e.preventDefault()

  //   login(email, password)
  // }

  function handleLogin(e) {
    e.preventDefault()

    toast.info('Carregando')
    setLoading(true)
    console.log(email, password)

    // email senha
    login(email, password)
    .then(
      (loginStatus) => {
        setLoading(false)
        loginStatus == 'ok' ? goHome() : toast.error("Algo deu errado :(")
      }
    )
    .catch(
      () => {
        setLoading(false)
      }
    )
  }

  AOS.init()
  return (
    <>
      <S.ContainerLogin>
        <img
          data-aos='fade-down'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
          src={LOGO}
          alt='logo'
        />
        <S.Form 
        onSubmit={(e) => {
          handleLogin(e)
          // console.log(email)
          // console.log(password)
        }}
        >
          <h2
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            Bem vindo
          </h2>
          <label
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            Nome de usuário
          </label>
          <input
            required
            value={email}
            onChange={(text) => setEmail(text.target.value)}

            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            type='text'
          />
          <label
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            Senha
          </label>
          <FiLock
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            size={20}
          />
          <input
            required
            value={password}
            onChange={(text) => setPassword(text.target.value)}

            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            type='password'
          />
          {loading ? (
          <img
            width="40px"
            style={{ margin: "0 auto" }}
            height=""
            src={loadingGif}
            alt="Loading"
          />
          ):(
          
          <button
            type="submit"
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            to='/home'
          >
            Entrar
          </button>
            )
          }
        </S.Form>
        <S.ContentBorder>
          <S.Border
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          />
          <p
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            ou
          </p>
          <S.Border
            data-aos='fade-down'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          />
        </S.ContentBorder>
        <S.ContentCreateAccount
          data-aos='fade-down'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          <Link to='/register'>Criar uma conta</Link>
          <FiMoreHorizontal size={14} />
          <Link to='/'>Entrar como</Link>
        </S.ContentCreateAccount>
      </S.ContainerLogin>
    </>
  )
}
