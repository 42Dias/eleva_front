export default function makeSumToCarrinho(carrinhos){
    const total =  formatPrice(
        carrinhos.reduce((sumTotal, carrinho) => {
        sumTotal += carrinho.produto.preco * carrinho.quantidade;
        return sumTotal;
        }, 0)
    );
    
    return total
}
