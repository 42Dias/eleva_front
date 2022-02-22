import { toast } from 'react-toastify';
import responseHandler from '../../utils/responseHandler';
import { api } from '../api'


export default async function addInLista(nome, descricao){
      const response = await api.post(`lista/`, { data: { nome: nome, descricao: descricao } })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status, "Lista criada com sucesso!",  "Erro na criação da lista")
          if(response.status == 200){

            return response.data
          }
          else if(response.status == 500){
            toast.error("Problemas com o servidor :(")
          }
        }
      )
      return response
    }