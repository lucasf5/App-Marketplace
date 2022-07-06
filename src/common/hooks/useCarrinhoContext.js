import { CarrinhoContext } from "common/context/Carrinho";
import { useContext } from "react";

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  const adicionarProduto = ({ nome, foto, id, valor, unidade }) => {
    const temOProduto = carrinho.some((item) => item.id === id);
    if (!temOProduto) {
      return setCarrinho([...carrinho, { id, nome, foto, valor, unidade: 1 }]);
    }
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === id) {
        return { ...item, unidade: item.unidade + 1 };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  };

  const removerProduto = ({ id }) => {
    const temOProduto = carrinho.some((item) => item.id === id);
    if (temOProduto) {
      setCarrinho(
        carrinho.map((item) => {
          if (item.id === id) {
            if (item.unidade > 0) {
              item.unidade--;
            }
          }
          return item;
        })
      );
    } 

  };

  return { adicionarProduto, removerProduto, carrinho };
};
