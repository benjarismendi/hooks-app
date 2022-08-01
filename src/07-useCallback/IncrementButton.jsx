import React from "react";

export const IncrementButton = React.memo(({ increment }) => {
  console.log("<Increment />");

  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      IncrementButton
    </button>
  );
});
