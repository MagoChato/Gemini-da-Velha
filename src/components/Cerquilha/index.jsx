import { GoogleGenerativeAI } from "@google/generative-ai";
import { useContext, useEffect, useRef } from "react";
import { PartidaContext } from "../../contexto/PartidaContext";

function Cerquilha({ numeroDePosicoes }) {
  const { marcacao, setMarcacao, partida, setPartida, apiKey } =
    useContext(PartidaContext);

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const generationConfig = {
    candidate_count: 1,
    temperature: 1,
    top_p: 1,
  };

  const aoClicar = (index) => {
    const turnoAtual = partida.turno;
    const idPosicao = index + 1;
    if (partida.turno % 2 !== 0) {
      switch (idPosicao) {
        case 1:
          if (partida.posicao_1 === "") {
            setPartida({
              ...partida,
              turno: turnoAtual + 1,
              posicao_1: "X",
            });
            setMarcacao({
              ...marcacao,
              [index]: "X",
            });
          }
          break;
        case 2:
          if (partida.posicao_2 === "") {
            setMarcacao({
              ...marcacao,
              [index]: "X",
            });
            setPartida({
              ...partida,
              turno: turnoAtual + 1,
              posicao_2: "X",
            });
          }
          break;
        case 3:
          if (partida.posicao_3 === "") {
            setMarcacao({
              ...marcacao,
              [index]: "X",
            });
            setPartida({
              ...partida,
              turno: turnoAtual + 1,
              posicao_3: "X",
            });
          }
          break;
        case 4:
          if (partida.posicao_4 === "") {
            setMarcacao({
              ...marcacao,
              [index]: "X",
            });
            setPartida({
              ...partida,
              turno: turnoAtual + 1,
              posicao_4: "X",
            });
          }
          break;
        case 5:
          if (partida.posicao_5 === "") {
            setMarcacao({
              ...marcacao,
              [index]: "X",
            });
            setPartida({
              ...partida,
              turno: turnoAtual + 1,
              posicao_5: "X",
            });
          }
          break;
        case 6:
          if (partida.posicao_6 === "") {
            setMarcacao({
              ...marcacao,
              [index]: "X",
            });
            setPartida({
              ...partida,
              turno: turnoAtual + 1,
              posicao_6: "X",
            });
          }
          break;
        case 7:
          if (partida.posicao_7 === "") {
            setMarcacao({
              ...marcacao,
              [index]: "X",
            });
            setPartida({
              ...partida,
              turno: turnoAtual + 1,
              posicao_7: "X",
            });
          }
          break;
        case 8:
          if (partida.posicao_8 === "") {
            setMarcacao({
              ...marcacao,
              [index]: "X",
            });
            setPartida({
              ...partida,
              turno: turnoAtual + 1,
              posicao_8: "X",
            });
          }
          break;
        case 9:
          if (partida.posicao_9 === "") {
            setMarcacao({
              ...marcacao,
              [index]: "X",
            });
            setPartida({
              ...partida,
              turno: turnoAtual + 1,
              posicao_9: "X",
            });
          }
          break;
        default:
          console.log("erro de validação");
      }
    }
  };

  useEffect(() => {
    if (partida.turno % 2 === 0) {
      turnoAPI();
    }
  }, [partida]);

  const jogadaDaAPI = (idPosicao) => {
    const turnoAtual = partida.turno;
    const index = idPosicao - 1;
    switch (idPosicao) {
      case 1:
        if (partida.posicao_1 === "") {
          setMarcacao({
            ...marcacao,
            [index]: "O",
          });
          setPartida({
            ...partida,
            turno: turnoAtual + 1,
            posicao_1: "O",
          });
        } else {
          turnoAPI();
        }
        break;
      case 2:
        if (partida.posicao_2 === "") {
          setMarcacao({
            ...marcacao,
            [index]: "O",
          });
          setPartida({
            ...partida,
            turno: turnoAtual + 1,
            posicao_2: "O",
          });
        } else {
          turnoAPI();
        }
        break;
      case 3:
        if (partida.posicao_3 === "") {
          setMarcacao({
            ...marcacao,
            [index]: "O",
          });
          setPartida({
            ...partida,
            turno: turnoAtual + 1,
            posicao_3: "O",
          });
        } else {
          turnoAPI();
        }
        break;
      case 4:
        if (partida.posicao_4 === "") {
          setMarcacao({
            ...marcacao,
            [index]: "O",
          });
          setPartida({
            ...partida,
            turno: turnoAtual + 1,
            posicao_4: "O",
          });
        } else {
          turnoAPI();
        }
        break;
      case 5:
        if (partida.posicao_5 === "") {
          setMarcacao({
            ...marcacao,
            [index]: "O",
          });
          setPartida({
            ...partida,
            turno: turnoAtual + 1,
            posicao_5: "O",
          });
        } else {
          turnoAPI();
        }
        break;
      case 6:
        if (partida.posicao_6 === "") {
          setMarcacao({
            ...marcacao,
            [index]: "O",
          });
          setPartida({
            ...partida,
            turno: turnoAtual + 1,
            posicao_6: "O",
          });
        } else {
          turnoAPI();
        }
        break;
      case 7:
        if (partida.posicao_7 === "") {
          setMarcacao({
            ...marcacao,
            [index]: "O",
          });
          setPartida({
            ...partida,
            turno: turnoAtual + 1,
            posicao_7: "O",
          });
        } else {
          turnoAPI();
        }
        break;
      case 8:
        if (partida.posicao_8 === "") {
          setMarcacao({
            ...marcacao,
            [index]: "O",
          });
          setPartida({
            ...partida,
            turno: turnoAtual + 1,
            posicao_8: "O",
          });
        } else {
          turnoAPI();
        }
        break;
      case 9:
        if (partida.posicao_9 === "") {
          setMarcacao({
            ...marcacao,
            [index]: "O",
          });
          setPartida({
            ...partida,
            turno: turnoAtual + 1,
            posicao_9: "O",
          });
        } else {
          turnoAPI();
        }
        break;
      default:
        console.log("erro de validação");
    }
  };

  async function turnoAPI() {
    const chat = model.startChat({
      generationConfig,
      history: [],
    });

    const prompt =
      "vamos jogar o jogo da velha, para marcar O responda um número de 1 a 9, que não seja.";

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();

    jogadaDaAPI(Number(text));
  }

  const divsRef = useRef([]);

  const criarDivs = () => {
    divsRef.current = [];

    return Array.from({ length: numeroDePosicoes }, (_, i) => {
      return (
        <div
          ref={(el) => (divsRef.current[i] = el)}
          key={i}
          onClick={() => aoClicar(i)}
        >
          {marcacao[i]}
        </div>
      );
    });
  };

  return <section className="cerquilha-container">{criarDivs()}</section>;
}

export default Cerquilha;
