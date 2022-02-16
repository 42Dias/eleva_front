export default function makeSumToCarrinho(fornecedor){
    const total =  formatPrice(
        fornecedor.produtos.reduce((sumTotal, produto) => {
        sumTotal += Number(produto.produto.preco) * produto.quantidade;
        return sumTotal;
        }, 0)
    );
    
    return total
}
