import { api } from "./api";



export default async function loadRedes(){
    return await api.get(`rede`)
          .then((response) => {
            console.log(response)
            let data = response.data.rows
            return data
          });
}
