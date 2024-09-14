import { useState } from "react";
import "./dropArea.scss";

export default function DropArea({ onDrop}) {
    
    const [showDrop, setShowDrop] = useState(false);
    return (
        <div
            className="drop-area"
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={() => setShowDrop(false)}
            onDrop={() => {
                onDrop();
                setShowDrop(false);
            }}

            onDragOver={(e) => e.preventDefault()}
      >
        Drop Here
      </div>
    );
}