import { toast } from 'react-toastify';
import { api } from '../api'


export default  async function loadSuprimento(){
      const suprimentoResponse = await api.get(`suprimento`)
      return suprimentoResponse.data.rows;
    }