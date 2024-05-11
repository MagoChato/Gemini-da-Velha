import { useContext } from "react";
import { PartidaContext } from "../../contexto/PartidaContext";

function InputKey() {
  const { setApiKey } = useContext(PartidaContext);
  return (
    <input
      type="text"
      onBlur={(evento) => setApiKey(evento.target.value)}
      placeholder="API_KEY"
    ></input>
  );
}

export default InputKey;
