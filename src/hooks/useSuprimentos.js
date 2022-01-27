import { createContext,  useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import responseHandler from '../utils/responseHandler';

const SuprimentoContext = createContext();

export function SuprimentoProvider({ children }) {
    const [update, setUpdate] = useState(0);

    function isInSuprimento(suprimento){
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
    async function loadSuprimento(){
      const suprimentoResponse = await api.get(`suprimento`)
      return suprimentoResponse.data.rows;
    }

     function somaQuantidade(suprimento){
      let somaDeItens = 0 

        suprimento.map((suprimento) =>
        somaDeItens += suprimento.quantidade
        )
        return somaDeItens
    }

    async function addInSuprimento(product, quantidade){
      const response = await api.post(`suprimentoProduto/`, { product, 'quantidade': quantidade })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status,"Produto adicionado ao suprimento com sucesso!",  "Erro na adição do produto")
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

    async function changeSuprimento(productAlreadyInSuprimento){
      const response = await api.put(`suprimento/`, { productAlreadyInSuprimento })
      .then(
        (response) => {
          let status = response.status
          responseHandler(status,"Produto adicionado ao suprimento com sucesso!",  "Erro na adição do produto")
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

    async function deleteProductOfSuprimento(productAlreadyInSuprimento){
      const response = api.delete('suprimentoProduto/', { productAlreadyInSuprimento })
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

    const suprimento = loadSuprimento()

    console.log("suprimento");
    console.log(suprimento);



    const produtoNosuprimento = isInSuprimento(suprimento)
  
    const productAlreadyInSuprimento = produtoNosuprimento[0]  
    console.log("productAlreadyInSuprimento")
    console.log(productAlreadyInSuprimento)

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
        
        if(stock > 0) {

          const newSuprimento = addInSuprimento(product, quantidade)

                        
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
        
        if (stock > productAlreadyInSuprimento.quantidade + quantidade) {

        productAlreadyInSuprimento.quantidade = productAlreadyInSuprimento.quantidade + quantidade;
          
          
          const newSuprimento = changeSuprimento(productAlreadyInSuprimento)
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

      const suprimento = loadSuprimento()
    
      console.log(suprimento)

      const produtoNosuprimento = isInSuprimento(suprimento)
    
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
  
      const deletedProduct = deleteProductOfSuprimento(productAlreadyInSuprimento)
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
      const suprimento = loadSuprimento()
    
      console.log("suprimento")
      console.log(suprimento)

      const produtoNosuprimento = isInSuprimento(suprimento)
      const productAlreadyInSuprimento = produtoNosuprimento[0]  

      console.log("productAlreadyInSuprimento")
      console.log(productAlreadyInSuprimento)
      
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
      productAlreadyInSuprimento.quantidade = quantidade           
      
      const newSuprimento = changeSuprimento(productAlreadyInSuprimento)
      console.log("newSuprimento")
      console.log(newSuprimento)


    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <SuprimentoContext.Provider
      value={{ suprimento, addProduct, removeProduct, updateProductAmount, update }}
    >
      {children}
    </SuprimentoContext.Provider>
  );
}

export function useSuprimento(){
  const context = useContext(SuprimentoContext);

  return context;
}
