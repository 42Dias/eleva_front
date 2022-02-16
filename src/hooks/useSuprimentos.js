import { createContext,  useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import addInSuprimento from '../services/suprimento/addInSuprimento';
import changeSuprimento from '../services/suprimento/changeSuprimento';
import deleteProductOfSuprimento from '../services/suprimento/deleteProductOfSuprimento';
import loadSuprimento from '../services/suprimento/loadSuprimento';
import responseHandler from '../utils/responseHandler';

const SuprimentoContext = createContext();

export function SuprimentoProvider({ children }) {
    const [update, setUpdate] = useState(0);

    function isInSuprimento(suprimento, productId){
      return suprimento.filter((suprimento) => {
        if(suprimento.produto.id == productId){
          console.log(suprimento)      
          return suprimento
        }
      })
    }
    async function loadProduct(productId){
      let productResponse = await api.get(`produto/${productId}`);
      return productResponse.data;
    }

    function somaQuantidade(suprimento){
      let somaDeItens = 0 

        suprimento.map((suprimento) =>
        somaDeItens += suprimento.quantidade
        )
        return somaDeItens
    }



    const suprimento = async () => {
      const allSuprimento  = await api.get(`suprimento/`)
      console.log("allSuprimento")
      console.log(allSuprimento.data.count)

      return allSuprimento.data.count;
    }
    

  const addProduct = async (productId, quantidade) => {
    toast.info("Carregando...")

    console.log("productId")
    console.log(productId)

    const suprimento = await loadSuprimento()

    console.log("suprimento");
    console.log(suprimento);



    const produtoNosuprimento = isInSuprimento(suprimento, productId)
  
    const productAlreadyInSuprimento = produtoNosuprimento[0]  
    console.log("productAlreadyInSuprimento")
    console.log(productAlreadyInSuprimento)

    const  product  =  await loadProduct(productId)

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
    Está é a quantidade de items em todo o suprimento
    */ 
    const quantidadeDeItemsNosuprimento = somaQuantidade(suprimento)
    
    
    console.log("quantidadeDeItemsNosuprimento")
    console.log(quantidadeDeItemsNosuprimento)

    try {
      
      if(!productAlreadyInSuprimento) {
      
        console.log("ARRIVA");
      

        console.log("product");
        console.log(product); 
        
        // if(stock > 0) {
        if(true) {

          const newSuprimento = await addInSuprimento(product, quantidade, suprimento, setUpdate)

                        
          console.log(JSON.stringify( { product, quantidade: quantidade }))

          console.log("newSuprimento")
          console.log(newSuprimento)
          return;
        }
        else{
          console.log("Erro")
          toast.error("Quantidade solicitada fora do estoque :(")
        }
      }

      else if(productAlreadyInSuprimento) {
        console.log("PRODUTO ESTÁ EN EL CARIÑO")

        const  stock  = product.quantidadeNoEstoque;
        console.log(productAlreadyInSuprimento)
        
        // if (stock > productAlreadyInSuprimento.quantidade + quantidade) {
        if (true) {

        productAlreadyInSuprimento.quantidade = productAlreadyInSuprimento.quantidade + quantidade;
          
          
          const newSuprimento = await changeSuprimento(productAlreadyInSuprimento, setUpdate)
          console.log(newSuprimento)
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

      const suprimento = await loadSuprimento()
    
      console.log(suprimento)

      const produtoNosuprimento = isInSuprimento(suprimento, productId)
    
      console.log("produtoNosuprimento")
      console.log(produtoNosuprimento)

      const productAlreadyInSuprimento = produtoNosuprimento[0];
      
      console.log("productAlreadyInSuprimento")
      console.log(productAlreadyInSuprimento)


      console.log("productId")
      console.log(productId)

      
    try {
      if(!productAlreadyInSuprimento) {
        toast.error('Erro na remoção do produto');
        return
      }
  
      const deletedProduct = await deleteProductOfSuprimento(productAlreadyInSuprimento, setUpdate)
      console.log(deletedProduct)
      return deletedProduct

    } catch {
      toast.error('Erro na remoção do produto');
    }
  };  

  const updateProductAmount = async (//apenas dar um post com a nova quantidade com o id do suprimento
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
      const suprimento = await loadSuprimento()
    
      console.log("suprimento")
      console.log(suprimento)

      const produtoNosuprimento = isInSuprimento(suprimento, productId)
      const productAlreadyInSuprimento = produtoNosuprimento[0]  

      console.log("productAlreadyInSuprimento")
      console.log(productAlreadyInSuprimento)
      
      const  product  =  await loadProduct(productId)

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
      productAlreadyInSuprimento.quantidade = quantidade           
      
      const newSuprimento = await changeSuprimento(productAlreadyInSuprimento, setUpdate)
      console.log("newSuprimento")
      console.log(newSuprimento)


    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };


  const addProductSuprimentoInCart = async (//apenas dar um post com a nova quantidade com o id do suprimento
    
    productId,
    quantidade,
    status,
    toggleFunction

  ) => {
    try {

      if(quantidade < 1){
        toast.error('Erro na alteração de quantidade do produto');
        return
      }


      console.log("productId")
      console.log(productId)

      toast.info("Carregando...")
      const suprimento = await loadSuprimento()
    
      console.log("suprimento")
      console.log(suprimento)

      const produtoNosuprimento = isInSuprimento(suprimento, productId)
      const productAlreadyInSuprimento = produtoNosuprimento[0]  

      console.log("productAlreadyInSuprimento")
      console.log(productAlreadyInSuprimento)
      
      const  product  =  await loadProduct(productId)

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
      productAlreadyInSuprimento.quantidade = quantidade           

      productAlreadyInSuprimento.status = status
      
      const newSuprimento = await changeSuprimento(productAlreadyInSuprimento, setUpdate)

      let addInCart = await toggleFunction( productId, quantidade) // add or remove!
      
    } catch(e) {
      toast.error('Erro na adição do no carrinho');
      console.log(e)
    }
  };

  return (
    <SuprimentoContext.Provider
      value={{ suprimento, addProduct, removeProduct, updateProductAmount, update, addProductSuprimentoInCart }}
    >
      {children}
    </SuprimentoContext.Provider>
  );
}

export function useSuprimento(){
  const context = useContext(SuprimentoContext);

  return context;
}
