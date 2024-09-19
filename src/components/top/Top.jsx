import "./top.scss";

export default function Top({ children }) {
  return (
    <div className="top">
      <div>{children}</div>
    </div>
  );
}
