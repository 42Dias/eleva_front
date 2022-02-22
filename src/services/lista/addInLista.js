import { toast } from 'react-toastify';
import responseHandler from '../../utils/responseHandler';
import { api } from '../api'


export default async function addInLista(product, lista, setUpdate){
      const response = await api.post(`listaProduto/`, { data: { id, product, lista: lista} })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status,"Produto adicionado ao lista com sucesso!",  "Erro na adição do produto")
          if(response.status == 200){

            // console.log("update 1")
            // console.log(update)

            return response.data
          }
          else if(response.status == 500){
            toast.error("Problemas com o servidor :(")
          }
        }
      )
      return response
    }