import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { monthlyData, generateDailyData } from "./data/data"; // Update the path accordingly
import SelectBox from "./selectBox";

const BarChartComponent = (props) => {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const handleChange = (e) => {
    setSelectedOption(e.target.innerText);
  };
  let filteredData = monthlyData;
  filteredData =
    selectedOption.toLocaleLowerCase() === "monthly"
      ? monthlyData
      : generateDailyData();
  const selections = props.selections;
  return (
    <div className="chart-container">
      <div className="chart-header">
        <span className="chart-title">{props.title}</span>
        <SelectBox
          selections={selections}
          selectedOption={selectedOption}
          handleChange={handleChange}
        />
      </div>
      <div className="chart-colors">
        {props.dataKeysInformation.map((item, index) => (
          <div key={index} className='line-colors-item'>
            <div
              className="background"
              style={{ backgroundColor: `${item[0]}` }}
            ></div>
            <span>{item[1]}</span>
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={filteredData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke='#E6EDFF' strokeDasharray="0 0" vertical={false}/>
          <XAxis dataKey="name" axisLine={false} />{" "}
          {/* Set axisLine to false to hide the X-axis line */}
          <YAxis axisLine={false} />{" "}
          {/* Set axisLine to false to hide the Y-axis line */}
          <Tooltip />
          <Legend />
          {props.dataKeysInformation.map((item, index) => (
            <Bar
              key={index}
              dataKey={item[2]}
              fill={item[0]}
              activeBar={<Rectangle fill={item[0]} stroke={item[0]} />}
              barSize={28}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
