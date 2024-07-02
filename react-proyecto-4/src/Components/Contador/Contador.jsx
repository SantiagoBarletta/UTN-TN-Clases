import React, { useState } from "react";

function Contador({ limit }) {
  const [contador, setContador] = useState(0);

  const handleIncrementar = () => {
    if (contador < limit) {
      setContador(contador + 1);
    }
  };

  const handleDecrementar = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div>
      {contador === 0 ? (
        <button onClick={handleIncrementar}>Comprar</button>
      ) : (
        <>
          <button onClick={handleDecrementar}>-</button>
          <span>Contador: {contador}</span>
          {
            contador === limit ? <span>Limite alcanzado</span> : 
          
          <button onClick={handleIncrementar}>+</button>}
        </>
      )}
      {contador > 1 && <h2>El stock disponible es de {limit}</h2>}
    </div>
  );
}

export default Contador;
