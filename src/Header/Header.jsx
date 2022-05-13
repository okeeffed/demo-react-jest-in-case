import React from "react";

export function Header({ loading, error, data }) {
  switch (true) {
    case loading:
      return <p>Loading...</p>;
    case error:
      return <p>Error!</p>;
    case Boolean(data):
      return (
        <div>
          {data.title && <h1>{data.title}</h1>}
          {data.body && <p>{data.body}</p>}
        </div>
      );
    default:
      throw new Error("Unexpected state");
  }
}
