import Button from "../button/Button";
import Top from "../top/Top";
import "./first.scss";
import Viz from "./visualize/Viz";
import Dropdown from './../dropdown/Dropdown';
import Radio from "../radio/Radio";

const algos = ["Option 1", "Option 2", "Option 3"];

export default function FirstSection() {
    return (
      <div className="first">
        <Top>
            <Dropdown  options={algos} />
            <Radio  name="name"  option="option"/>
            <Button  value="New Array" />
            <Button  value="Speed" />
        </Top>

        <Viz />
      </div>
    );
}