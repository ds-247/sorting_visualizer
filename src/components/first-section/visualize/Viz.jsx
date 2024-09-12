import BarChart from "../../bar-chart/BarChart";
import "./viz.scss";

export default function Viz({
  data,
  green,
  orange,
  completion,
  pink,
  skyBlue,
  blue,
  red,
}) {
  return (
    <div className="viz">
      <BarChart
        red={red}
        green={green}
        orange={orange}
        data={data}
        blue={blue}
        skyBlue={skyBlue}
        pink={pink}
        completion={completion}
      />
    </div>
  );
}
