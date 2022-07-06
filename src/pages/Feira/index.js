import { Container, Header, Lista } from "./styles";
import toast, { Toaster } from "react-hot-toast";
import feira from "./feira.json";
import Produto from "components/Produto";
import NavBar from "./NavBar";
import { memo, useContext, useEffect } from "react";
import { UsuarioContext } from "common/context/Usuario";
import { CarrinhoContext } from "common/context/Carrinho";
import useCalcular from "common/hooks/useCalcular";

function Feira() {
  const { dados } = useContext(UsuarioContext);
  const { carrinho, valores, setValores } = useContext(CarrinhoContext);
  const {contagemDeValores, contagemDeElementos} = useCalcular();

  useEffect(() => {
    setValores(contagemDeValores());
    if (contagemDeValores() >= dados.valor) {
      toast.error("Valor excedido");
    } else {
      if (contagemDeElementos() === 0) {
        toast.error("Carrinho vazio");
      } else {
        toast.success("Valor total: R$" + contagemDeValores());
      }
    }
  }, [carrinho, dados.valor]);

  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá, {dados.nome}!</h2>
          <h3> Saldo: R$ {dados.valor}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Toaster position="top-right" reverseOrder={false} />
      <Lista>
        <h2>Produtos:</h2>
        {feira.map((produto) => (
          <Produto {...produto} key={produto.id} />
        ))}
      </Lista>
      <h3 color="primary"> Total: R$ {valores}</h3>
    </Container>
  );
}

export default memo(Feira);
