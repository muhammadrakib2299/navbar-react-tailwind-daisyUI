import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";

function ChartLine() {
  const subjectMarks = [
    { name: "Alice", math: 85, bangla: 75, english: 88 },
    { name: "Bob", math: 78, bangla: 80, english: 72 },
    { name: "Charlie", math: 92, bangla: 85, english: 91 },
    { name: "David", math: 66, bangla: 70, english: 60 },
    { name: "Eva", math: 74, bangla: 72, english: 79 },
    { name: "Frank", math: 88, bangla: 86, english: 84 },
    { name: "Grace", math: 81, bangla: 79, english: 76 },
    { name: "Hannah", math: 90, bangla: 87, english: 93 },
    { name: "Ian", math: 59, bangla: 65, english: 58 },
    { name: "Jane", math: 73, bangla: 70, english: 75 },
    { name: "Kevin", math: 77, bangla: 78, english: 74 },
    { name: "Luna", math: 95, bangla: 90, english: 96 },
    { name: "Mike", math: 68, bangla: 60, english: 66 },
    { name: "Nina", math: 83, bangla: 82, english: 85 },
    { name: "Oscar", math: 70, bangla: 68, english: 71 },
    { name: "Paula", math: 89, bangla: 88, english: 90 },
    { name: "Quinn", math: 60, bangla: 55, english: 62 },
    { name: "Rachel", math: 86, bangla: 84, english: 89 },
    { name: "Steve", math: 72, bangla: 74, english: 70 },
    { name: "Tina", math: 80, bangla: 81, english: 78 },
  ];
  return (
    <div className="p-10">
      <h1 className="text-4xl">Line Chart</h1>

      <LineChart width={1200} height={400} data={subjectMarks}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line type={"monotone"} dataKey={"bangla"} stroke="red"></Line>
        <Line type={"monotone"} dataKey={"english"} stroke="blue"></Line>
        <Line type={"monotone"} dataKey={"math"} stroke="green"></Line>
      </LineChart>
    </div>
  );
}

export default ChartLine;
