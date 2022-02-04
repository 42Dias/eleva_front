import { api } from "../api";



export default async function loadCodigoDeBarras(){
    return await api.get(`codigo-de-barra`)
          .then((response) => {
            console.log(response)
            let data = response.data.rows
            return data
          });
}
