import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IMAGE from '../../assets/imageinit.svg'
import Navbar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer'
import * as S from './styled'
import { toast } from 'react-toastify'
import uploadImage from '../../services/uploadImage'

export default function MyProducts() {
  const [name, setName] = useState("");
  const [image, setImage] = useState('');

  async function handleUploadImage(fileName, file){
    console.log(fileName)
    console.log(file)
    const data = {
      file,
      file: file,
      fileName, fileName
    }
    console.log("data")
    console.log(data)

    uploadImage(data)
  }

  return (
    <S.ContainerLogin>
      <Navbar />
      <S.BoxImage>
        <img src={IMAGE} alt='imagem inicial' />
      </S.BoxImage>
      <S.Button>
        <Link to='/comprar'>Comece a comprar</Link>
      </S.Button>

      <form className="file"
          encType='multipart/form-data'

          onSubmit={(e) => {
            e.preventDefault()
            console.log(e)
            handleUploadImage(name, image)
          }}
          >
            <h2>Faça upload</h2>
            <h4
                // style={{margin: 'auto'}}
                >
                  Imagem deve estar em 1440 X 417 PX
            </h4>
          <input 
          type="file"
          required
          name="image"
          onChange={e => {
          console.log(e)

          console.log(e.target.files[0].name)
          setName(e.target.files[0].name)
          setImage(e.target.files[0])

          if(e.target.files[0].type.includes('image')){
            console.log("TEM IMAGEM!")
            console.log("e.target.files[0]")
            console.log(e.target.files[0])
          }
          else{
            toast.error("Arquivo não suportado")
          }
        }
        } 
          /><br /><br />
            <input type="submit" value="Enviar"
             />
          </form>
      <Footer />
    </S.ContainerLogin>
  )
}
