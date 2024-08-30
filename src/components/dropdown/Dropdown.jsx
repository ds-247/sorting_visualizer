import "./dropdown.scss";

export default function Dropdown({ options }) {
    let label = "Algos";
    let selectedOption = "Doing";

    function handleSelectChange(params) {
        // yet to implement
    }

  return (
    <div>
      <label>{label}</label>
      <select value={selectedOption} onChange={handleSelectChange}>
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
