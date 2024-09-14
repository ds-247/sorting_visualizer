import "./draggable.scss";

export default function ({ title,setDrag, index }) {
    
    
    return (
        <div className="draggable" draggable  onDragStart={() => setDrag(index)} onDragEnd={() => setDrag(null)}>
            {title}
        </div>
    )
}