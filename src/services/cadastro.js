/*
Função usada no cadastro
*/

import {apiWithoutTenant} from './api'
import handleLocalStorageEmailAndPassword from '../utils/handleLocalStorageEmailAndPassword'
import responseHandler from '../utils/responseHandler'
import loadUser from './loadUser'
import servidorErrorMessage from '../utils/servidorErrorMessage'


export default async function cadastro(nome, email, senha, categoria, status) {
    return apiWithoutTenant.post('auth/sign-up', {
        fullName: nome,
        email: email,
        password: senha,
        role: categoria,
        status: status
      })
      .then((response) => {
        let mensagemOk = 'Opa, recebemos o seu registro :)'
        responseHandler(response.status, mensagemOk)
        if (response.status == 200) {
          //first check the http response, returning the result to user
          handleLocalStorageEmailAndPassword(email, senha)
          loadUser(response.data)
          return 'ok'
        }

      })
      .catch(() => {
        servidorErrorMessage()
      })
  }