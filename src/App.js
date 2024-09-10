import Button from "./components/Button.tsx";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App bg-sky-100 min-h-screen p-2">
      <header className="App-header">
        <h1 className="text-center text-3xl font-bold py-8">Trénujte vlastní sadu slovíček z cizího jazyka</h1>

        <section className={"flex justify-center content-center"}>
          <Link to={`/vocabulary`}>
            <Button text={"Vložit nová slova"} />
          </Link>
        </section>
      </header>
    </div>
  );
}

export default App;
