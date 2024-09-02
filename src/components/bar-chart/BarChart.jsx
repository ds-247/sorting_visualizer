import "./bar.scss";

export default function BarChart({ data, one, two }) {
  return (
    <div className="bar-chart">
      {data.map((value, index) => (
        <div
          key={index}
          className="bar"
          style={{
            height: `${value}px`, 
            backgroundColor: index === one || index === two ? 'red' : 'black',
          }}
        >
        </div>
      ))}
    </div>
  );
}
