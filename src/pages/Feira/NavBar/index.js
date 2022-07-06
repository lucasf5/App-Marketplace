import { Nav } from "./styles";
import { ReactComponent as Logo } from "assets/logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { useNavigate } from "react-router";
import useCalcular from "common/hooks/useCalcular";

export default function NavBar() {
  const navigate = useNavigate();
  const {contagemDeElementos} = useCalcular();
  
  return (
    <Nav>
      <Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
      <IconButton
        disabled={contagemDeElementos() === 0}
      >
        <Badge color="primary"
        badgeContent={contagemDeElementos()}
        >
          <ShoppingCartIcon
            onClick={() => navigate("/carrinho")}
            style={{ cursor: "pointer" }}
          />
        </Badge>
      </IconButton>
    </Nav>
  );
}
