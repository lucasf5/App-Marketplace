import React, { createContext, useState } from 'react'

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Contexto do Usuario';

export const UsuarioProvider = ({ children }) => {
  const [dados, setDados] = useState({
    nome: "Usuário",
    valor: 0,
  });
  return (
    <UsuarioContext.Provider value={{ dados, setDados }}>
      {children}
    </UsuarioContext.Provider>
  );
}