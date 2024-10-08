import "./stats.scss";

export default function Stats({ algo, max }) {
  // Assuming `algo.time` is a value between 0 and 100 representing percentage
  const logTime = Math.log(algo.time);
  const logMaxTime = Math.log(max);

  // Calculate the fill percentage based on logarithmic values
  const progressPercentage = max === 0 ? max : (logTime / logMaxTime) * 100;
  const precision_time = algo.time.toFixed(1);

  return (
    <div className="stats">
      <div className="progress" style={{ width: `${progressPercentage}%` }}>
        <p>{precision_time}</p>
      </div>
    </div>
  );
}
