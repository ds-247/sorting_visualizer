import BarChart from "../../bar-chart/BarChart";
import "./viz.scss";

export default function Viz({ data, iter, activated, spectator, swapArr }) {
  return (
    <div className="viz">
      <BarChart
        swapArr={swapArr}
        iter={iter}
        activated={activated}
        data={data}
        spectator={spectator}
      />
    </div>
  );
}
