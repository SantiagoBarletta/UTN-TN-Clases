import React from "react";

export const FormularioColor = ({ handleSubmitNewCard }) => {
  return (
    <form onSubmit={handleSubmitNewCard}>
      <input type="color" name="color-1" required />
      <input type="color" name="color-2" required />
      <input type="color" name="color-3" required />
      <input type="color" name="color-4" required />
      <input type="date" name="fecha" required />
      <button type="submit">Agregar Carta de Color</button>
    </form>
  );
};
