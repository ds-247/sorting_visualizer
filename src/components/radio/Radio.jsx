import "./radio.scss";

export default function Radio({name, option}) {

    const selectedOption = ''

    function handleOptionChange() {
        
    }

    return (
      <div>
        <input
          type="radio"
          name={name}
          value={option}
          checked={selectedOption === option}
          onChange={handleOptionChange}
        />
        <label>{option}</label>
      </div>
    );
    
}