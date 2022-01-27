import { createContext,  useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import responseHandler from '../utils/responseHandler';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [update, setUpdate] = useState(0);

    function isInCart(cart){
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
    async function loadCart(){
      const cartResponse = await api.get(`carrinho`)
      return cartResponse.data.rows;
    }

     function somaQuantidade(cart){
      let somaDeItens = 0 

        cart.map((cart) =>
        somaDeItens += cart.quantidade
        )
        return somaDeItens
    }

    async function addInCart(product, quantidade){
      const response = await api.post(`carrinhoProduto/`, { product, 'quantidade': quantidade })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status,"Produto adicionado ao carrinho com sucesso!",  "Erro na adição do produto")
          if(response.status == 200){
            setUpdate(prevValue => {
              return prevValue+1	
               })

            console.log("update 1")
            console.log(update)

            return response.data
          }
          else if(response.status == 500){
            toast.error("Problemas com o servidor :(")
          }
        }
      )
      return response
    }

    async function changeCart(productAlreadyInCart){
      const response = await api.put(`carrinho/`, { productAlreadyInCart })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status,"Produto adicionado ao carrinho com sucesso!",  "Erro na adição do produto")
          if(response.status == 200){
            setUpdate(prevValue => {
              return prevValue+1	
               })

            console.log("update 1")
            console.log(update)

            return response.data
          }
          else if(response.status == 500){
            toast.error("Problemas com o servidor :(")
          }
        }
      )
      return response
    }

    async function deleteProductOfCart(productAlreadyInCart){
      const response = api.delete('carrinhoProduto/', { productAlreadyInCart })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status, "Produto removido com sucesso!", "Erro :(")
          if(response.status == 200){

            setUpdate(prevValue => {
              return prevValue-1	
               })
          }
          return response.data

        }
      )

      return response 
    }


    const cart = async () => {
      const allCart  = await api.get(`carrinho/`)
      console.log("allCart")
      console.log(allCart.data.count)

      return allCart.data.count;
      }
    

  const addProduct = async (productId, quantidade) => {
    toast.info("Carregando...")

    console.log("productId")
    console.log(productId)

    const cart = loadCart()

    console.log("cart");
    console.log(cart);



    const produtoNoCarrinho = isInCart(cart)
  
    const productAlreadyInCart = produtoNoCarrinho[0]  
    console.log("productAlreadyInCart")
    console.log(productAlreadyInCart)

    const  product  =  loadProduct(productId)

    if(product.isOferta === true){
      console.log("product.isOferta == true")
      console.log(product.isOferta == true)
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
    
    
    console.log("quantidadeDeItemsNoCarrinho")
    console.log(quantidadeDeItemsNoCarrinho)

    try {
      
      if(!productAlreadyInCart) {
      
        console.log("ARRIVA");
      

        console.log("product");
        console.log(product); 
        
        if(stock > 0) {

          const newCart = addInCart(product, quantidade)

                        
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

      else if(productAlreadyInCart) {
        console.log("PRODUTO ESTÁ EN EL CARIÑO")

        const  stock  = product.quantidadeNoEstoque;
        console.log(productAlreadyInCart)
        
        if (stock > productAlreadyInCart.quantidade + quantidade) {

        productAlreadyInCart.quantidade = productAlreadyInCart.quantidade + quantidade;
          
          
          const newCart = changeCart(productAlreadyInCart)
          console.log(newCart)
        } 
        
        else {
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

  const removeProduct = async (productId) => {
      toast.info("Carregando")

      console.log(productId)

      const cart = loadCart()
    
      console.log(cart)

      const produtoNoCarrinho = isInCart(cart)
    
      console.log("produtoNoCarrinho")
      console.log(produtoNoCarrinho)

      const productAlreadyInCart = produtoNoCarrinho[0];
      
      console.log("productAlreadyInCart")
      console.log(productAlreadyInCart)


      console.log("productId")
      console.log(productId)

      
    try {
      if(!productAlreadyInCart) {
        toast.error('Erro na remoção do produto');
        return
      }
  
      const deletedProduct = deleteProductOfCart(productAlreadyInCart)
      console.log(deletedProduct)
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
      const cart = loadCart()
    
      console.log("cart")
      console.log(cart)

      const produtoNoCarrinho = isInCart(cart)
      const productAlreadyInCart = produtoNoCarrinho[0]  

      console.log("productAlreadyInCart")
      console.log(productAlreadyInCart)
      
      const  product  = loadProduct(productId)

      console.log("product")
      console.log(product)

      let stock = product.quantidadeNoEstoque;

      if( stock == null ){
        stock = 999
      }

      
      console.log('stock: ' + stock)

      const stockIsFree = quantidade > stock

      console.log('stockIsFree: ' + stockIsFree)

      if(stockIsFree) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }
      productAlreadyInCart.quantidade = quantidade           
      
      const newCart = changeCart(productAlreadyInCart)
      console.log("newCart")
      console.log(newCart)


    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount, update }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(){
  const context = useContext(CartContext);

  return context;
}
