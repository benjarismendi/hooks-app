import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("MessageMounted");

    const onMouseMove = ({x, y}) => {
        const coords = {x, y};
        console.log(coords);
    }

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      console.log("Message unMounted");
      window.removeEventListener('mousemove', onMouseMove)
    };
  }, []);

  return <h3>Usuario ya existe</h3>;
};
