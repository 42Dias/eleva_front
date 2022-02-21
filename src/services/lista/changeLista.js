import { toast } from 'react-toastify';
import { api } from '../api'
import responseHandler from '../../utils/responseHandler';

export default async function changeLista(productAlreadyInLista, setUpdate){
      console.log("changeLista")
      console.log("productAlreadyInLista");
      console.log(productAlreadyInLista);
      const response = await api.put(`lista/${productAlreadyInLista.id}`, { data : {productAlreadyInLista} })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status,"Produto adicionado ao lista com sucesso!",  "Erro na adição do produto")
          if(response.status == 200){
            setUpdate(prevValue => {
              return prevValue+1	
              })

            return response.data
          }
          else if(response.status == 500){
            toast.error("Problemas com o servidor :(")
          }
        }
      )
      return response
    }