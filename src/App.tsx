import { useState } from "react";
import "./App.css";
import NumpadInput from "./components/NumpadInputsComp";
import OperationInputs from "./components/OperationInputsComp";
import OutputsComp from "./components/OutputsComp";

function App() {
  const [display, setDisplay] = useState<string>("");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState<boolean>(false);

  const handleNumberClick = (num: string) => {
    if (waitingForSecondOperand) {
      setDisplay(num);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperationClick = (op: string) => {
    const inputValue = parseFloat(display);
    
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operation) {
      const result = calculate(firstOperand, inputValue, operation);
      setDisplay(String(result));
      setFirstOperand(result);
    }
    
    setWaitingForSecondOperand(true);
    setOperation(op);
  };

  const handleEqualsClick = () => {
    if (firstOperand === null || operation === null) return;
    
    const inputValue = parseFloat(display);
    const result = calculate(firstOperand, inputValue, operation);
    
    setDisplay(String(result));
    setFirstOperand(null);
    setOperation(null);
    setWaitingForSecondOperand(false);
  };

  const handleClearClick = () => {
    setDisplay("");
    setFirstOperand(null);
    setOperation(null);
    setWaitingForSecondOperand(false);
  };

  const handleDecimalClick = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
      return;
    }
    
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const calculate = (firstOperand: number, secondOperand: number, operation: string): number => {
    switch (operation) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return secondOperand !== 0 ? firstOperand / secondOperand : 0;
      default:
        return secondOperand;
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg mb-4">
        <h1 className="text-2xl font-bold text-center">Eeezy Calc</h1>
      </div>
      
      <OutputsComp display={display} />
      
      <div className="flex gap-4">
        <div className="flex-grow">
          <NumpadInput 
            onNumberClick={handleNumberClick}
            onClearClick={handleClearClick}
            onEqualsClick={handleEqualsClick}
            onDecimalClick={handleDecimalClick}
          />
        </div>
        <div>
          <OperationInputs onOperationClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
