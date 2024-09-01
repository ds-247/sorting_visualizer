import "./btn.scss";

export default function Button({value, sort}) {
    function handleClick() {
        console.log("button is clicked");
        sort();
    }
    return (
        <div onClick={handleClick} className="btn">
            {value}
        </div>
    )
}