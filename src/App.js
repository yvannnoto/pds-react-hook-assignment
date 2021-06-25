import "./styles.css";
import { useState } from "react";

const Input = () => {
  return (
    <>
      <label className="label" for="my-input">
        email
        <input id="my-input"></input>
      </label>
      <div>It is not a valid email address</div>
    </>
  );
};

const Example = () => {
  const [value, setValue] = useState("Mexico");

  const handleOnClick = () => {
    setValue("Colombia");
  };

  return (
    <div className="foo">
      <div>{value}</div>
      <button onClick={handleOnClick}>Change it to Colombia</button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <Input />

      <Example />
    </div>
  );
}
