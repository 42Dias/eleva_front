import { createContext,  useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import addInCart from '../services/carrinho/addInCart';
import changeCart from '../services/carrinho/changeCart';
import deleteProductOfCart from '../services/carrinho/deleteProductOfCart';
import loadCart from '../services/carrinho/loadCart';
import responseHandler from '../utils/responseHandler';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [update, setUpdate] = useState(0);

    function isInCart(cart,productId){
      return cart.filter((cart) => {
        if(cart.produto.id == productId){
          console.log(cart)      
          return cart
        }
      })
    }
    async function loadProduct(productId){
      let productResponse = await api.get(`produto/${productId}`);
      return productResponse.data;
    }

     function somaQuantidade(cart){
      let somaDeItens = 0 

        cart.map((cart) =>
        somaDeItens += cart.quantidade
        )
        return somaDeItens
    }



    const cart = async () => {
      const allCart  = await api.get(`carrinho/`)
      console.log("allCart")
      console.log(allCart.data.count)

      return allCart.data.count;
      }
    

  const addProduct = async (productId, quantidade) => {
    toast.info("Carregando...")

    const cart = await loadCart()


    const produtoNoCarrinho = isInCart(cart, productId)
  
    const productAlreadyInCart = produtoNoCarrinho[0]  

    const  product  = await loadProduct(productId)

    if(product.isOferta === true){
      product.preco = product.precoOferta
    }

    console.log("product.isOferta == true")
    console.log(product.isOferta == true)
    

    console.log("product")
    console.log(product)
    
    const stock = product.quantidadeNoEstoque;
    
    console.log("stock") 
    console.log(stock) 

    /*
    Está é a quantidade de items em todo o carrinho
    */ 
    const quantidadeDeItemsNoCarrinho = somaQuantidade(cart)
    
    
    try {
      
      // if(!productAlreadyInCart) {
      if(!productAlreadyInCart) {
        console.log("ARRIVA");
      

        console.log("product");
        console.log(product); 
        
        // if(stock > 0) {
        if(true) {

          const newCart = await addInCart(product, quantidade)

                        
          console.log(JSON.stringify( { product, quantidade: quantidade }))

          console.log("newCart")
          console.log(newCart)
          return;
        }
        else{
          console.log("Erro")
          toast.error("Quantidade solicitada fora do estoque :(")
        }
      }

      else if(productAlreadyInCart != null &&  productAlreadyInCart != undefined) {

        const  stock  = product.quantidadeNoEstoque;
        console.log(productAlreadyInCart)
        
        // if (stock > productAlreadyInCart.quantidade + quantidade) {
        if (true) {

          productAlreadyInCart.quantidade = quantidade;
          
          
          const newCart = await changeCart(productAlreadyInCart)
        } 
        
        else {
          console.log(productAlreadyInCart)
          toast.error('Quantidade solicitada fora de estoque')
        }
      }


      else{
        console.log("erro na quantidade do produto")
      }
    }  
    
    catch (e){
      console.log(e)
      toast.error('Erro na adição do produto')
    }
  };

  const removeProductFromCart = async (productId) => {
      toast.info("Carregando")

      const cart = await loadCart()

      const produtoNoCarrinho = isInCart(cart, productId)
    

      const productAlreadyInCart = produtoNoCarrinho[0];
      
    try {
      if(!productAlreadyInCart) {
        toast.error('Erro na remoção do produto');
        return
      }
  
      const deletedProduct = await deleteProductOfCart(productAlreadyInCart)
      return deletedProduct

    } catch {
      toast.error('Erro na remoção do produto');
    }
  };  

  const updateProductAmount = async (//apenas dar um post com a nova quantidade com o id do carrinho
    {
    productId,
    quantidade,
  }) => {
    try {
      if(quantidade < 1){
        toast.error('Erro na alteração de quantidade do produto');
        return
      }

      toast.info("Carregando...")
      const cart = await loadCart()
  

      const produtoNoCarrinho = isInCart(cart, productId)
      const productAlreadyInCart = produtoNoCarrinho[0]  
      
      const  product  = await loadProduct(productId)

      let stock = product.quantidadeNoEstoque;

      if( stock == null ){
        stock = 999
      }

      const stockIsFree = quantidade > stock

      console.log('stockIsFree: ' + stockIsFree)

      // if(stockIsFree) {
      if(false) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }
      
      productAlreadyInCart.quantidade = quantidade           
      
      const newCart = await changeCart(productAlreadyInCart)
      console.log("newCart")
      console.log(newCart)


    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProductFromCart, updateProductAmount, update }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(){
  const context = useContext(CartContext);

  return context;
}
