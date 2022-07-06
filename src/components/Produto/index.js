import { Container } from "./styles";
import { memo, useContext, useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useCarrinhoContext } from "common/hooks/useCarrinhoContext";
import { CarrinhoContext } from "common/context/Carrinho";

function Produto({ nome, foto, id, valor, unidade }) {
  const { carrinho } = useContext(CarrinhoContext);
  const { adicionarProduto, removerProduto } = useCarrinhoContext();
  const [quantidade, setQuantidade] = useState(0);

  const produto = { nome, foto, id, valor, unidade };
  useEffect(() => {
    setQuantidade(
      carrinho.some((item) => item.id === id)
        ? carrinho.find((item) => item.id === id).unidade
        : 0
    );
  }, [carrinho, id]);

  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color="secondary" onClick={() => removerProduto(produto)}>
          <RemoveIcon />
        </IconButton>
        <span>
          {quantidade}
        </span>
        <IconButton color="primary" onClick={() => adicionarProduto(produto)}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);
