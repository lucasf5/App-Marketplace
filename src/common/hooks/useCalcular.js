import { CarrinhoContext } from 'common/context/Carrinho'
import { useContext } from 'react'

const useCalcular = () => {
  const {carrinho} = useContext(CarrinhoContext)
    const contagemDeElementos = () =>{
        return carrinho.map((item) => item.unidade).reduce((a, b) => a + b, 0)
    }
    const contagemDeValores = () => {
      return carrinho
      .map((item) => item.valor * item.unidade)
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
    }
  return {contagemDeElementos, contagemDeValores}
}

export default useCalcular