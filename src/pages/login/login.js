import React from 'react'
import { Link } from 'react-router-dom'
import { MYPRODUCTS } from 'routes'

export function Login() {
  return (
    <>
      <h1>Bem vindo</h1>
      <Link to={MYPRODUCTS}>Navegar</Link>
    </>
  )
}
