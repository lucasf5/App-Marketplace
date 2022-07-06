import React, { createContext } from "react";

export const PagamentoContext = createContext();

PagamentoContext.displayName = "Contexto do Pagamento";

export const PagamentoProvider = ({ children }) => {
  const tiposDePagamentos = [
    {
      id: 1,
      nome: "Boleto",
      juros: 1,
    },
    {
      id: 2,
      nome: "Cartão de Crédito",
      juros: 1.3,
    },
    {
      id: 3,
      nome: "Cartão de Débito",
      juros: 1.1,
    },
    {
      id: 4,
      nome: "Dinheiro",
      juros: 1,
    },
    {
      id: 5,
      nome: "Cheque",
      juros: 1.5,
    },
    {
      id: 6,
      nome: "Pix",
      juros: 1,
    },
  ];

  const [pagamento, setPagamento] = React.useState(tiposDePagamentos[0]);

  return (
    <PagamentoContext.Provider value={{tiposDePagamentos, setPagamento, pagamento}}>
      {children}
    </PagamentoContext.Provider>
  );
};
