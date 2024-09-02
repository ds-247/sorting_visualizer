import "./dropdown.scss";

export default function Dropdown({ options , selected, handleAlgoSelection}) {
    let label = "Algos";

    function handleSelectChange(params) {
      console.log(params.target.value)
        handleAlgoSelection(params.target.value);
    }

  return (
    <div>
      <label>{label}</label>
      <select value={selected} onChange={handleSelectChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
