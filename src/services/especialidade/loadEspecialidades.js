import { api } from "../api";



export default async function loadEspecialidades(){
    return await api.get(`especialidade`)
          .then((response) => {
            console.log(response)
            let data = response.data.rows
            return data
          });
}
