import React, { useEffect, useState } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link, useHistory } from 'react-router-dom'
import { FiLock, FiMoreHorizontal } from 'react-icons/fi'
import LOGO from '../../assets/logo.png'
import * as S from './styled'
import axios from 'axios'
import { apiWithoutTenant, loadingGif, ip } from '../../services/api'
import { toast } from "react-toastify";



export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  function handleLocalStorage(emailA, passwordB) {
    localStorage.setItem("email", JSON.stringify(emailA)); //saves client's data into localStorage:
    localStorage.setItem("password", JSON.stringify(passwordB)); //saves client's data into localStorage:
    console.log();
  }
  function handleLocalStorageToken(token) {
    const setLocalStorage = (data) => {
      localStorage.setItem("token", JSON.stringify(data)); //saves client's data into localStorage:
      console.log("OK!!!");
    };
    setLocalStorage(token);
    loadUser();
  }

  function handleClickLogin() {
      history.push("/home");
  }

  async function login(e) {
    e.preventDefault()
    setLoading(true);
    apiWithoutTenant.post(`/auth/sign-in`, {
      email: email,
      password: password,
    })  
    // let response = axios.post(ip + ":8144/api/auth/sign-in", {
    //   email: email,
    //   password: password,
    // })
    .then((response) => {
     console.log("response")
      console.log(response.data)
      if (response.statusText == "OK") {
        toast.info('Login efetuado com sucesso! :)');
        console.log(response.data)


        // handleLocalStorage(email, password);
        // handleLocalStorageToken(response.data);
        setLoading(false);


        document.location.reload(true);
      }
       else if (response.statusText == "Forbidden") {
        setLoading(false);
        toast.error("Ops, Não tem permisão!");
      }
       else {
        setLoading(false);
        toast.error("Ops, Dados Incorretos!");
      }
    })
  .catch((error) => {
     console.log("error")
     console.log(error)
      if (error.response) {
        toast.error(error.response.data);
      }
      else {
        toast.error("Erro no servidor, tente mais tarde :(");
      }
      setLoading(false)
    }); 

  }






  AOS.init()
  console.log("ok")
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
          login(e)
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
