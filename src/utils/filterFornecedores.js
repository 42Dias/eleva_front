export default async function filterFornecedores(produtosNoCarrinho, setFunction){
    //variaveis para a ajuda do código  
    let containerDeObjetos = [];
    let fornecedoresNoCarrinho = [];
    
    // produtosNoCarrinho é um array com todos os produtos do carrinho
    
    produtosNoCarrinho.filter(
      async (produtoNoCarrinho) => {

        // caso o fornecedor já estiver na variavel fornecedoresNoCarrinho não é adicionado!
        if(fornecedoresNoCarrinho.includes(produtoNoCarrinho.fornecedorId)) return

        fornecedoresNoCarrinho.push(produtoNoCarrinho.fornecedorId)
      }
    )
    
    fornecedoresNoCarrinho.map(
      (fornecedor) =>{ 
        // cria um objeto novo para cada fornecedor!
        const novoObj =  { "fornecedorId": fornecedor, "produtos": [] }
        containerDeObjetos.push(novoObj)
      }
    )

    containerDeObjetos.map( (fornecedor, index )=>{

      produtosNoCarrinho.filter(
        (produtoNoCarrinho) => {

          if (!fornecedor.fornecedorId == produtoNoCarrinho.fornecedorId) return
          
          // caso produto já estiver no carrinho ele é atualizado
          if(fornecedor.id == produtoNoCarrinho.id){
            fornecedor == produtoNoCarrinho
          }

          else{

            // adicionado o produto no fornecedor
            fornecedor.produtos.push(produtoNoCarrinho)
            
            fornecedor.produtos.map(
              (produtoDoFornecedor) => {
                // faz a adequação do objeto
                return produtoDoFornecedor.fornecedorId = fornecedor.fornecedorId
              }
            )
          }
          }

        )
        // console.log(fornecedor, index)
      }
      )
      // retorna a função do setState
      return setFunction(containerDeObjetos)
      }
     

