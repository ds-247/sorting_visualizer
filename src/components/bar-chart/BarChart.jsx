import "./bar.scss";

export default function BarChart({ data, one, two }) {
  return (
    <div className="bar-chart">
      {data.map((value, index) => (
        <div
          key={index}
          className="bar"
          style={{
            height: `${value}px`, // Height is relative to the value
            backgroundColor: index === one || index === two ? 'white' : 'red',
          }}
        >
          {/* {value} */}
        </div>
      ))}
    </div>
  );
}
