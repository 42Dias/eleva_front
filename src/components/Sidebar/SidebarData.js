import React from 'react'
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [
  {
    title: 'Home',
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
    path: '/products',
    icon: <FaIcons.FaBox />,
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
]
