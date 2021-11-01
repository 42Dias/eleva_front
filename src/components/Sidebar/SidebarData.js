import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { FiTag } from 'react-icons/fi'

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <FaIcons.FaHome />,
    cName: 'nav-text',
  },
  {
    title: 'Comprar',
    path: '/comprar',
    icon: <FaIcons.FaShoppingCart />,
    cName: 'nav-text',
  },
  {
    title: 'Meus pedidos',
    path: '/meus-pedidos',
    icon: <FaIcons.FaBox />,
    cName: 'nav-text',
  },
  {
    title: 'Cadastrar produto',
    path: '/cadastrar-produto',
    icon: <FiTag />,
    cName: 'nav-text',
  },
  {
    title: 'Cadastrar fornecedor',
    path: '/cadastrar-fornecedor',
    icon: <FaIcons.FaPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Histórico de pedidos',
    path: '/historico-de-pedidos',
    icon: <FaIcons.FaHistory />,
    cName: 'nav-text',
  },
  {
    title: 'Detalhes da venda',
    path: '/detalhes-da-venda',
    icon: <FaIcons.FaMoneyBillAlt />,
    cName: 'nav-text',
  },
  {
    title: 'Aprovar usuários',
    path: '/aprovar-usuario',
    icon: <FaIcons.FaUserPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Aprovar produtos',
    path: '/aprovar-produtos',
    icon: <FaIcons.FaCheck />,
    cName: 'nav-text',
  },
  {
    title: 'Sair',
    path: '/login',
    icon: <FaIcons.FaArrowLeft />,
    cName: 'nav-exit',
  },
]
