import React, { useState } from "react";

// DemoManager - 数字とステートを管理
const DemoManager = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("エラー: 数字を入力してください");
      return;
    }

    let calculation;
    switch (operator) {
      case "+":
        calculation = n1 + n2;
        break;
      case "-":
        calculation = n1 - n2;
        break;
      case "×":
        calculation = n1 * n2;
        break;
      case "÷":
        calculation = n2 !== 0 ? n1 / n2 : "エラー: ゼロで割ることはできません";
        break;
      default:
        calculation = "演算子を選択してください";
    }

    setResult(calculation);
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  };

  return (
    <div className="calculator-container">
      <DemoDisplay
        result={result}
        num1={num1}
        num2={num2}
        operator={operator}
        onOperatorSelect={setOperator}
        onCalculate={calculate}
        onReset={reset}
      />
      <DemoNumInputBox num1={num1} num2={num2} setNum1={setNum1} setNum2={setNum2} />
    </div>
  );
};
