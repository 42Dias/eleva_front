import { toast } from 'react-toastify';
import { api } from '../api'


export default  async function  findLista(id){
      console.log(id)
      const listaResponse = await api.get(`listaProduto?filter%5Blista%5D=${id}`)
      console.log(listaResponse)
      return listaResponse.data.rows;
    }