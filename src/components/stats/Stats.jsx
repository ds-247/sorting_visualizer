import "./stats.scss";

export default function Stats({ algo, max }) {
  // Assuming `algo.time` is a value between 0 and 100 representing percentage
  const progressPercentage = (algo.time / max) * 100; // Ensure it stays between 0 and 100
  const precision_time = algo.time.toFixed(2);

  return (
    <div className="stats">
      <div className="progress" style={{ width: `${progressPercentage}%` }}>
        {precision_time}
      </div>
    </div>
  );
}
