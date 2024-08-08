import Button from "./Button";
import { useState } from "react";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleChange(value) {
    setInput((prev) => prev + value);
  }

  function equals() {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      const error = err.name;
      setResult(error);
      //console.log(err);
    }
  }

  function clear() {
    setInput("");
    setResult("");
  }

  return (
    <>
      <div className="text-center mt-2">
        <p className="text-indigo-500 hover:font-bold hover:cursor-pointer">
          Calculator
        </p>
        <div className="p-2 border-2 border-black inline-block rounded bg-indigo-200">
          <input type="text" className="border-none" value={input} readOnly />
          <br />
          <input
            type="text"
            className="border-none"
            value={result === "" ? result : `=${result}`}
            readOnly
          />
          <div>
            <Button value={"X"} handleButton={clear} />
            <Button value={"/"} handleButton={handleChange} />
            <Button value={"*"} handleButton={handleChange} />
            <Button value={"%"} handleButton={handleChange} />
          </div>
          <div>
            <Button value={"9"} handleButton={handleChange} />
            <Button value={"8"} handleButton={handleChange} />
            <Button value={"7"} handleButton={handleChange} />
            <Button value={"+"} handleButton={handleChange} />
          </div>
          <div>
            <Button value={"6"} handleButton={handleChange} />
            <Button value={"5"} handleButton={handleChange} />
            <Button value={"4"} handleButton={handleChange} />
            <Button value={"-"} handleButton={handleChange} />
          </div>
          <div>
            <Button value={"3"} handleButton={handleChange} />
            <Button value={"2"} handleButton={handleChange} />
            <Button value={"1"} handleButton={handleChange} />
            <Button value={"="} handleButton={equals} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
