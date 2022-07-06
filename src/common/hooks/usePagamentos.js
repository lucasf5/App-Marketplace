import { PagamentoContext } from "common/context/Pagamento";
import React, { useContext } from "react";
import useCalcular from "./useCalcular";

const usePagamentos = () => {
  const { contagemDeValores } = useCalcular();
  const { pagamentos, tiposDePagamentos } = useContext(PagamentoContext);

  const findPagament = (id) => {
    return tiposDePagamentos.find((pagamento) => pagamento.id === id);
  };

  const handleValue = (juros) => {
    return (juros * contagemDeValores()).toFixed(2);
  };

  return { findPagament, handleValue };
};

export default usePagamentos;
