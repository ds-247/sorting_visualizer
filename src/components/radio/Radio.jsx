import "./radio.scss";

export default function Radio({name, option, disable}) {

    const selectedOption = ''

    function handleOptionChange() {
        
    }

    return (
      <div className="radio-cont">
        <input
          type="radio"
          name={name}
          value={option}
          checked={selectedOption === option}
          onChange={handleOptionChange}
          disabled={disable}
        />
        <label>{option}</label>
      </div>
    );
    
}