const adicionarProduto = () => {
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