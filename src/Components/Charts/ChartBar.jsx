import React from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

function ChartBar() {
  const data = [
    { name: "Alice", math: 85, bangla: 75, english: 88 },
    { name: "Bob", math: 78, bangla: 80, english: 72 },
    { name: "Char", math: 92, bangla: 85, english: 91 },
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
      <h1 className="text-4xl">Bar chart</h1>

      <BarChart width={1300} height={400} data={data}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis />
        <Bar dataKey={"bangla"} fill="green"></Bar>
        <Bar dataKey={"english"} fill="blue"></Bar>
        <Bar dataKey={"math"} fill="red"></Bar>
      </BarChart>
    </div>
  );
}

export default ChartBar;
