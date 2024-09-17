import { useState } from "react";
import "./dropArea.scss";

export default function DropArea({ onDrop}) {
  const [showDrop, setShowDrop] = useState(false);
    
    return (
        <div
            className={showDrop ? "drop-area" : "hide"}
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