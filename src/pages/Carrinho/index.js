import {
  Button,
  Snackbar,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { CarrinhoContext } from "common/context/Carrinho";
import { PagamentoContext } from "common/context/Pagamento";
import { UsuarioContext } from "common/context/Usuario";
import useCalcular from "common/hooks/useCalcular";
import usePagamentos from "common/hooks/usePagamentos";
import Produto from "components/Produto";
import { Lista } from "pages/Feira/styles";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Voltar,
  TotalContainer,
  PagamentoContainer,
} from "./styles";

function Carrinho() {
  const { carrinho } = useContext(CarrinhoContext);
  const { dados, setDados } = useContext(UsuarioContext);
  const { tiposDePagamentos, setPagamento, pagamento } =
    useContext(PagamentoContext);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { findPagament } = usePagamentos();

  const { contagemDeValores, contagemDeElementos } = useCalcular();

  const navigate = useNavigate();

  useEffect(() => {
    if (contagemDeElementos() === 0) {
      navigate("/feira");
    }
  }, [contagemDeValores]);

  return (
    <Container>
      <Voltar onClick={() => navigate(-1)} />
      <h2>Carrinho</h2>
      <Lista>
        <h2>Produtos:</h2>
        {carrinho
          .filter((produto) => produto.unidade !== 0)
          .map((produto) => (
            <Produto {...produto} key={produto.id} />
          ))}
      </Lista>
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={pagamento.id}
          onChange={(e) => setPagamento(findPagament(e.target.value))}
        >
          {tiposDePagamentos.map((tipo) => (
            <MenuItem key={tipo.id} value={tipo.id}>
              {tipo.nome}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {(pagamento.juros * contagemDeValores()).toFixed(2)}</span>
        </div>
        <div>
          <h2> Juros: </h2>
          <span> {pagamento.juros} %</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {dados.valor || 0}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span>
            {" "}
            R${" "}
            {(dados.valor - contagemDeValores() * pagamento.juros).toFixed(2)}
          </span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
          setDados({
            ...dados,
            valor: (
              dados.valor -
              contagemDeValores() * pagamento.juros
            ).toFixed(2),
          });
        }}
        color="primary"
        variant="contained"
        disabled={
          (dados.valor - contagemDeValores() * pagamento.juros).toFixed(2) < 0
        }
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSnackbar}
        onClose={() => {
          setOpenSnackbar(false);
        }}
      >
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}

export default Carrinho;
