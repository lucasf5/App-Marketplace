import React, { createContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Contexto do Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [valores, setValores] = useState(0);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho, valores, setValores }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

