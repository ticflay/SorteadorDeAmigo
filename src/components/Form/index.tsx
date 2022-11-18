import React, { useRef, useState } from "react";
import { useAddPlayer } from "../../state/hooks/useAddPlayer";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";

const Formulario = () => {
  const [name, setName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  
  const addPlayerToList = useAddPlayer();

  const errorMessage = useErrorMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPlayerToList(name);
    setName("");
    inputRef?.current?.focus()
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type={"text"}
        placeholder="Insira o nome do participante"
      />
      <button disabled={!name}>Adicionar</button>
        {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
};

export default Formulario;
