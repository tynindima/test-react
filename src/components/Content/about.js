import React, { useState } from "react";

const arr = ["a", "b", "c", "d", "e", "f", "g"];

const About = () => {
  const [isSorted, setIsSorted] = useState(false);

  const sortCallback = (a, b) => a.localeCompare(b);

  const isCompareFunc = (func, isSort) => {
    return isSort ? (a, b) => func(b, a) : func;
  };

  const sortedArr = arr.sort(isCompareFunc(sortCallback, isSorted));

  return (
    <div>
      <h1>Test pagination</h1>
      <button onClick={() => setIsSorted((prev) => !prev)}>to sort</button>
      <ul>
        {sortedArr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
