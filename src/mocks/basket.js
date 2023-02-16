import farm from "../../assets/logo.png";
import tomate from "../../assets/vegetais/Tomate.png";
import brocolis from "../../assets/vegetais/Brócolis.png";
import batata from "../../assets/vegetais/Batata.png";
import pepino from "../../assets/vegetais/Pepino.png";
import abobora from "../../assets/vegetais/Abóbora.png";

const basket = {
  header: {
    title: "Detalhes da cesta",
  },
  details: {
    name: "Cesta de Verduras",
    farmLogo: farm,
    farmName: "Jenny Jack Farm",
    description:
      "Uma cesta com produtos selecionados diretamente da fazenda oara sua cozinha.",
    price: "R$ 40,00",
    buttonText: "Comprar",
  },
  itens: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: tomate,
      },
      {
        name: "Brócolis",
        image: brocolis,
      },
      {
        name: "Batata",
        image: batata,
      },
      {
        name: "Pepino",
        image: pepino,
      },
      {
        name: "Abóbora",
        image: abobora,
      },
    ],
  },
};

export default basket;
