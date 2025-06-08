// DemoDisplay - 表示画面とボタン配置
const DemoDisplay = ({ result, num1, num2, operator, onOperatorSelect, onCalculate, onReset }) => {
  const operators = ["+", "-", "×", "÷"];

  return (
    <div className="display-container">
      {/* １段目：計算表示画面 */}
      <div className="result-display">
        <h2>計算結果</h2>
        <div className="result-value">{result || "結果がここに表示されます"}</div>
      </div>

      {/* ２段目：インプットNumber表示 */}
      <div className="input-display">
        <span className="calculation-preview">
          {num1 || "0"} {operator} {num2 || "0"} = {result ? result : "?"}
        </span>
      </div>

      {/* ３段目：DemoButtonを横一列に配置 */}
      <div className="button-row">
        {operators.map((op) => (
          <DemoButton key={op} operator={op} isSelected={operator === op} onClick={onOperatorSelect} />
        ))}
      </div>

      {/* 計算・リセットボタン */}
      <div className="action-buttons">
        <button className="calculate-button" onClick={onCalculate}>
          計算実行
        </button>
        <button className="reset-button" onClick={onReset}>
          リセット
        </button>
      </div>
    </div>
  );
};
