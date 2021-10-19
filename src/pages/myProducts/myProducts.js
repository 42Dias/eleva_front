import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN } from 'routes'

export function MyProducts() {
  return (
    <>
      <h1>Meus Produtos</h1>
      <Link to={LOGIN}>Navegar</Link>
    </>
  )
}
