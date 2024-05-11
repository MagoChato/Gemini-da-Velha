import "./App.css";
import Cerquilha from "./components/Cerquilha";
import InputKey from "./components/InputKey";
import Titulo from "./components/Titulo";
import { PartidaProvider } from "./contexto/PartidaContext";

function App() {
  return (
    <main>
      <PartidaProvider>
        <Titulo />
        <Cerquilha numeroDePosicoes={9} />
        <InputKey />
      </PartidaProvider>
    </main>
  );
}

export default App;
