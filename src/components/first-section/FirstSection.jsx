import Button from "../button/Button";
import Top from "../top/Top";
import "./first.scss";
import Viz from "./visualize/Viz";

export default function FirstSection() {
    return (
      <div className="first">
        <Top>
            <Button  value="First" />
            <Button  value="Second" />
            <Button  value="Third" />
            <Button  value="Fourth" />
        </Top>

        <Viz />
      </div>
    );
}