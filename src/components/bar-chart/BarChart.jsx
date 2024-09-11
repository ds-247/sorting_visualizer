import "./bar.scss";

export default function BarChart({
  data,
  iter,
  activated,
  spectator,
  swapArr,
}) {
  return (
    <div className="bar-chart">
      {data.map((value, index) => {
        let color = "black";
        if (swapArr.includes(index)) color = "red";
        else if (index == iter) color = "#00f700";
        else if (index == activated) color = "orange";
        else if (index == spectator) color = "blue";

        return (
          <div
            key={index}
            className="bar"
            style={{
              height: `${value}px`,
              backgroundColor: color,
            }}
          ></div>
        );
      })}
    </div>
  );
}
