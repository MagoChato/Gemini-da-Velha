import { createContext, useEffect, useState } from "react";

export const PartidaContext = createContext();

export const PartidaProvider = ({ children }) => {
  const inicioDeJogo = {
    turno: 1,
    posicao_1: "",
    posicao_2: "",
    posicao_3: "",
    posicao_4: "",
    posicao_5: "",
    posicao_6: "",
    posicao_7: "",
    posicao_8: "",
    posicao_9: "",
  };
  const [partida, setPartida] = useState(inicioDeJogo);
  const [marcacao, setMarcacao] = useState({});
  const [apiKey, setApiKey] = useState();

  useEffect(() => {
    switch ("X") {
      case partida.posicao_5:
        if (
          (partida.posicao_9 === "X" && partida.posicao_1 === "X") ||
          (partida.posicao_3 === "X" && partida.posicao_7 === "X") ||
          (partida.posicao_2 === "X" && partida.posicao_8 === "X") ||
          (partida.posicao_4 === "X" && partida.posicao_6 === "X")
        ) {
          alert("Você venceu!");
          window.location.reload();
        }
        break;
      case partida.posicao_2:
        if (partida.posicao_1 === "X" && partida.posicao_3 === "X") {
          alert("Você venceu!");
          window.location.reload();
        }
        break;
      case partida.posicao_4:
        if (partida.posicao_1 === "X" && partida.posicao_7 === "X") {
          alert("Você venceu!");
          window.location.reload();
        }
        break;
      case partida.posicao_6:
        if (partida.posicao_3 === "X" && partida.posicao_9 === "X") {
          alert("Você venceu!");
          window.location.reload();
        }
        break;
      case partida.posicao_8:
        if (partida.posicao_7 === "X" && partida.posicao_9 === "X") {
          alert("Você venceu!");
          window.location.reload();
        }
        break;
    }
    switch ("O") {
      case partida.posicao_5:
        if (
          (partida.posicao_9 === "O" && partida.posicao_1 === "O") ||
          (partida.posicao_3 === "O" && partida.posicao_7 === "O") ||
          (partida.posicao_2 === "O" && partida.posicao_8 === "O") ||
          (partida.posicao_4 === "O" && partida.posicao_6 === "O")
        ) {
          alert("Você perdeu!");
          window.location.reload();
        }
        break;
      case partida.posicao_2:
        if (partida.posicao_1 === "O" && partida.posicao_3 === "O") {
          alert("Você perdeu!");
          window.location.reload();
        }
        break;
      case partida.posicao_4:
        if (partida.posicao_1 === "O" && partida.posicao_7 === "O") {
          alert("Você perdeu!");
          window.location.reload();
        }
        break;
      case partida.posicao_6:
        if (partida.posicao_3 === "O" && partida.posicao_9 === "O") {
          alert("Você perdeu!");
          window.location.reload();
        }
        break;
      case partida.posicao_8:
        if (partida.posicao_7 === "O" && partida.posicao_9 === "O") {
          alert("Você perdeu!");
          window.location.reload();
        }
        break;
    }
    if (
      partida.posicao_1 !== "" &&
      partida.posicao_2 !== "" &&
      partida.posicao_3 !== "" &&
      partida.posicao_4 !== "" &&
      partida.posicao_5 !== "" &&
      partida.posicao_6 !== "" &&
      partida.posicao_7 !== "" &&
      partida.posicao_8 !== "" &&
      partida.posicao_9 !== ""
    ) {
      alert("empate!");
      window.location.reload();
    }
  }, [partida]);

  return (
    <PartidaContext.Provider
      value={{ partida, setPartida, marcacao, setMarcacao, apiKey, setApiKey }}
    >
      {children}
    </PartidaContext.Provider>
  );
};
