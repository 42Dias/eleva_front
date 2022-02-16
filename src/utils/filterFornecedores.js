export default async function filterFornecedores(produtosNoCarrinho, setFunction){
    let containerDeObjetos = [];
    let fornecedoresNoCarrinho = [];
    
      produtosNoCarrinho.filter(
        async (produtoNoCarrinho) => {
          if(!fornecedoresNoCarrinho.includes(produtoNoCarrinho.fornecedorId)){
            fornecedoresNoCarrinho.push(produtoNoCarrinho.fornecedorId)
          }
        }
      )
      

      fornecedoresNoCarrinho.map(
        (fornecedor) =>{ 
          const novoObj =  { "fornecedorId": fornecedor, "produtos": [] }
          containerDeObjetos.push(novoObj)
        }
      )
    
      console.log("containerDeObjetos")
      console.log(containerDeObjetos)

      console.log(produtosNoCarrinho)
      console.log(fornecedoresNoCarrinho)

      containerDeObjetos.map( (fornecedor, index )=>{
        produtosNoCarrinho.filter(
          (produtoNoCarrinho, index) => {
            if (fornecedor.fornecedorId == produtoNoCarrinho.fornecedorId){
              console.log("fornecedor.produtos")
              console.log(fornecedor.produtos)
                fornecedor.produtos.push(produtoNoCarrinho)
                fornecedor.produtos.map(
                  (produtoDoFornecedor) => {
                    produtoDoFornecedor.fornecedorId = fornecedor.fornecedorId
                  }
                )
            }
          }
          )
          console.log(fornecedor, index)
        }
        )
        return setFunction(containerDeObjetos)
      }
     

