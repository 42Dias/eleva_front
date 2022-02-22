import { toast } from 'react-toastify';
import { api, id } from '../api'


export default  async function loadLista(){
      console.log(id)
      const listaResponse = await api.get(`lista?filter%5Buser%5D=${id}`)
      console.log(listaResponse)
      return listaResponse.data.rows;
    }