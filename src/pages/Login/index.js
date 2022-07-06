import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {UsuarioContext} from "common/context/Usuario";


function Login() {

  const {dados, setDados} = useContext(UsuarioContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({
      ...dados,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/feira");
  }
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          name="valor"
          value={dados.valor}
          onChange={handleChange}
        />
      </InputContainer>
      <Button variant="contained" type="submit" color="primary" onClick={handleSubmit}>
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
