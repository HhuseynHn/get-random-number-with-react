/** @format */
import React, { useState } from "react";
import Input from "../../component/reusable/input/input";
import "./style.css";

const Home = () => {
  const [result, setResult] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5);

  const randomFunc = (a_min, b_max) =>
    Math.floor(Math.random() * (b_max - a_min) + a_min);

  const hundleButton = () => {
    setResult(randomFunc(min, max));
  };

  return (
    <>
      <div className="container">
        <div className="input-result">
          <h2>
            Random number: <span>{result}</span>
          </h2>
        </div>
        <div className="min-max-input">
          <div className="min-input">
            <h4>Min:</h4>
            <Input
              type={"number"}
              placeholder={"Min"}
              value={min}
              handleChange={(minValue) => setMin(minValue.target.value)}
            />
          </div>
          <div className="max-input">
            <h4>Max:</h4>
            <Input
              type={"number"}
              value={max}
              placeholder={"Max"}
              handleChange={(maxValue) => setMax(maxValue.target.value)}
            />
          </div>
        </div>

        <div className="btn">
          <button onClick={() => hundleButton()}>Get random number</button>
        </div>
      </div>
    </>
  );
};

export default Home;
