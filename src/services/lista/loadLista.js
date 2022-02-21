import { toast } from 'react-toastify';
import { api } from '../api'


export default  async function loadLista(){
      const listaResponse = await api.get(`lista`)
      return listaResponse.data.rows;
    }