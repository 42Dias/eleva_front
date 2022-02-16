export default function makeSumToCarrinho(carrinho){
    const total = formatPrice(
        carrinho.reduce((sumTotal, product) => {
        sumTotal += product.produto.preco * product.quantidade;
        return sumTotal;
        }, 0)
    );

}
