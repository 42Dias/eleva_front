import React from 'react'
import { DeleteButton } from './styled'
import { FiTrash } from "react-icons/fi";


export default function ButtonDelete() {
  return (
    <>
        <DeleteButton>
            <FiTrash />
        </DeleteButton>
    </>
  )
}
