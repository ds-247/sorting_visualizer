import "./input.scss";

export default function Input({ label, value, onChange }) {
  function handleChange(e) {
    if (e.target.value.length <= 10) {
      onChange(e.target.value);
    }
  }
  return (
    <div className="input">
      <label>
        {label}
        <input
          type="number"
          value={value}
          onChange={handleChange}
          placeholder="Array size"
        />
      </label>
    </div>
  );
}
