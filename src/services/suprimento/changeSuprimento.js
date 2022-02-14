import { toast } from 'react-toastify';
import { api } from '../api'
import responseHandler from '../../utils/responseHandler';

export default async function changeSuprimento(productAlreadyInSuprimento, setUpdate){
      console.log("changeSuprimento")
      console.log("productAlreadyInSuprimento");
      console.log(productAlreadyInSuprimento);
      const response = await api.put(`suprimento/${productAlreadyInSuprimento.id}`, { data : {productAlreadyInSuprimento} })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status,"Produto adicionado ao suprimento com sucesso!",  "Erro na adição do produto")
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