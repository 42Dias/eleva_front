import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { FiArrowLeft, FiTag } from 'react-icons/fi'

export const SidebarData = [
  {
    title: 'Menu',
    path: '/myproducts',
    icon: <FaIcons.FaHome />,
    cName: 'nav-text',
  },
  {
    title: 'Comprar',
    path: '/reports',
    icon: <FaIcons.FaShoppingCart />,
    cName: 'nav-text',
  },
  {
    title: 'Meus pedidos',
    path: '/buy',
    icon: <FaIcons.FaBox />,
    cName: 'nav-text',
  },
  {
    title: 'Cadastrar produto',
    path: '/registerproduct',
    icon: <FiTag />,
    cName: 'nav-text',
  },
  {
    title: 'Cadastrar fornecedor',
    path: '/register-supplier',
    icon: <FaIcons.FaPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Histórico de pedidos',
    path: '/messages',
    icon: <FaIcons.FaHistory />,
    cName: 'nav-text',
  },
  {
    title: 'Detalhes da venda',
    path: '/support',
    icon: <FaIcons.FaMoneyBillAlt />,
    cName: 'nav-text',
  },
  {
    title: 'Aprovar usuários',
    path: '/approve-user',
    icon: <FaIcons.FaUserPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Aprovar produtos',
    path: '/support',
    icon: <FaIcons.FaCheck />,
    cName: 'nav-text',
  },
  {
    title: 'Sair',
    path: '/login',
    icon: <FiArrowLeft />,
    cName: 'nav-exit',
  },
]
