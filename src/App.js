function App() {
  const addNewWord = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center text-3xl font-bold underline">Trénujte vlastní sadu slovíček z cizího jazyka</h1>

        <buton type="button" onClick={addNewWord} className="rounded">Vložit nová slova</buton>
      </header>
    </div>
  );
}

export default App;
