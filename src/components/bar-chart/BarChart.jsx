import "./bar.scss";

export default function BarChart({
  data,
  green,
  orange,
  skyBlue,
  pink,
  blue,
  red,
}) {
  return (
    <div className="bar-chart">
      {data.map((value, index) => {
        let color = "black";
        if (red.includes(index)) color = "red";
        else if (index == green) color = "#00f700";
        else if (index == orange) color = "orange";
        else if (index == blue) color = "blue";
        else if (pink.includes(index)) color = "pink";
        else if (skyBlue.includes(index)) color = "blue";

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
