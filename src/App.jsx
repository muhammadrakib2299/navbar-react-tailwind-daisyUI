import "./App.css";
import ChartBar from "./Components/Charts/ChartBar";
import ChartLine from "./Components/Charts/ChartLine";
import LineChart from "./Components/Charts/ChartLine";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <ChartLine></ChartLine>
        <ChartBar></ChartBar>
      </div>
    </>
  );
}

export default App;
