import React from "react";
import { useCounter } from "../hooks/useCounter";
import { usefetch } from "../hooks/usefetch";
import { Blockquote } from "./Blockquote";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = usefetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h3>The Breaking Bad API</h3>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <Blockquote author={author} quote={quote} />
      )}

      <button
        className="btn btn-secondary"
        onClick={() => increment()}
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  );
};
