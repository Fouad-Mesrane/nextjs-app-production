
"use client";
import React, { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(v => v+1)
  }
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button onClick={handleClick} className="btn btn-primary">increase</button>
      
    </div>
  );
};

export default ClientPage;
