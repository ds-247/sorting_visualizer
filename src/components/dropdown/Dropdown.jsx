import "./dropdown.scss";

export default function Dropdown({ options , selected, handleAlgoSelection}) {

    function handleSelectChange(params) {
        handleAlgoSelection(params.target.value);
    }

  return (
    <div className="dropDown">
      <select value={selected} onChange={handleSelectChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={
              typeof option === "string" ? option : Object.values(option)[0]
            }
          >
            {typeof option === "string" ? option : Object.keys(option)[0]}
          </option>
        ))}
      </select>
    </div>
  );
}
