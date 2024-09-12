import "./btn.scss";

export default function Button({ value, onClick, disable }) {
  function handleClick() {
    if (!disable) {
      console.log("button is clicked");
      onClick();
    }
  }
  return (
    <div onClick={handleClick} className="btn">
      {value}
    </div>
  );
}
