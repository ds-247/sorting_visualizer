import "./btn.scss";

export default function Button({value, onClick}) {
    function handleClick() {
        console.log("button is clicked");
        onClick();
    }
    return (
        <div onClick={handleClick} className="btn">
            {value}
        </div>
    )
}