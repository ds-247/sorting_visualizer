import "./btn.scss";

export default function Button({value}) {
    function handleClick() {
        console.log("button is clicked");
    }
    return (
        <div onClick={handleClick} className="btn">
            {value}
        </div>
    )
}