import React, { useCallback, useState } from "react";
import { Button } from "./Button";

export const Tarea = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback(
    (num) => {
        setValor((valor) => valor + num);
      },
    [],
  )

  return (
    <>
      <h3>Tarea</h3>
      <hr />
      <h4>Total: {valor}</h4>

      {numeros.map((numero) => (
        <Button key={numero} incrementar={incrementar} numero={numero} />
      ))}
    </>
  );
};
