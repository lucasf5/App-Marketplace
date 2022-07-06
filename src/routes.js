import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "pages/Login";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";
import { PagamentoProvider } from "common/context/Pagamento";

const Router = () => {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <CarrinhoProvider>
          <PagamentoProvider>
            <Routes>
              <Route path="/feira" element={<Feira />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
          </PagamentoProvider>
        </CarrinhoProvider>
      </UsuarioProvider>
    </BrowserRouter>
  );
};

export default Router;
