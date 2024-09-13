import FirstSection from "./components/first-section/FirstSection";
import SecondSection from "./components/second-section/SecondSection";
import "./App.scss";

function App() {
  return (
    <div className="container">
      {/* <section>
        <FirstSection />
      </section> */}
      <section>
        <SecondSection />
      </section>
    </div>
  );
}

export default App;
