import React, { useState } from "react";

const RazaForm = ({ setRaza }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setRaza(value);
    setValue("");
  };

  return (
    <article className="razaForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="topic"
          placeholder="Busca por raza..."
        />
        <button type="submit">Buscar</button>
      </form>
    </article>
  );
};

export default RazaForm;
