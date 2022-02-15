import React from 'react'
import { Link } from 'react-router-dom'
import { DeleteButton } from './styled'
import { FiTrash } from "react-icons/fi";


export default function ButtonDelete({func}) {
  return (
    <>
        <DeleteButton>
            <FiTrash />
        </DeleteButton>
    </>
  )
}
