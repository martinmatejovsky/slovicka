import Button from '../components/Button';
import {useState} from "react";

export default function Vocabulary() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");

  function handleInputWord(event) {
    setWord(event.target.value);
  }

  function handleInputTranslation(event) {
    setTranslation(event.target.value);
  }

  return (
    <div id="vocabulary">
      <h1 className="text-center text-3xl font-bold py-8">Přidat slovo</h1>

        <form className={"flex flex-col items-center gap-4"}>
          <fieldset className={"grid grid-cols-2 gap-4 w-5/6"}>
            <label htmlFor="word" className={"text-right"}>Slovo</label>
            <input onChange={handleInputWord} type={"text"} id={"word"} className={"border-black border-2 rounded-lg px-4 py-2"} value={word} />

            <label htmlFor="translation" className={"text-right"}>Překlad</label>
            <input onChange={handleInputTranslation} type={"text"} id={"translation"} className={"border-black border-2 rounded-lg px-4 py-2"} value={translation} />
          </fieldset>

          <Button type={"submit"} text={"Přidat"} />
        </form>
    </div>
  );
}