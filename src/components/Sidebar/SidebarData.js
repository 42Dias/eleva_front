import { FiHome, FiBox, FiPlus, FiClock, FiUserPlus, FiCheck, FiGlobe, FiShoppingCart, FiGrid, FiUsers, FiShoppingBag } from "react-icons/fi";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <FiHome />,
    cName: 'nav-text',
  },
  {
    title: 'Comprar',
    path: '/listar-produtos',
    icon: <FiShoppingCart />,
    cName: 'nav-text',
  },
  {
    title: 'Meus pedidos',
    path: '/meus-pedidos',
    icon: <FiBox />,
    cName: 'nav-text',
  },

  {
    title: 'Meus Produtos',
    path:  '/meus-produtos',
    icon:  <FiShoppingBag />,
    cName: 'nav-text',
  },
  
  {
    title: 'Cadastrar fornecedor',
    path: '/cadastrar-fornecedor',
    icon: <IoStorefrontOutline />,
    cName: 'nav-text',
  },  
  {
    title: 'Cadastrar produto',
    path: '/cadastrar-produto',
    icon: <FiPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Histórico de pedidos',
    path: '/historico-de-pedidos',
    icon: <FiClock />,
    cName: 'nav-text',
  },
  {
    title: 'Detalhes das vendas',
    path: '/detalhes-da-venda',
    icon: <BsCashCoin />,
    cName: 'nav-text',
  },
  {
    title: 'Aprovar usuários',
    path: '/aprovar-usuario',
    icon: <FiUserPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Aprovar produtos',
    path: '/aprovar-produtos',
    icon: <FiCheck />,
    cName: 'nav-text',
  },
  // {
  //   title: 'Meus Dados',
  //   path: '/meus-dados-empresa',
  //   icon: <FaIcons.FaDisease />,
  //   cName: 'nav-text',
  // },
  {
    title: 'Aprovar rede',
    path: '/redes',
    icon: <FiGlobe />,
    cName: 'nav-text',
  },
  {
    title: 'Categorias',
    path:  '/categorias',
    icon:  <FiGrid />,
    cName: 'nav-text',
  },

  {
    title: 'Convidar fornecedor',
    path:  '/convidar-fornecedor',
    icon:  <FiUsers />,
    cName: 'nav-text',
  },
]