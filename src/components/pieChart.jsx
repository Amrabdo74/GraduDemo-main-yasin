import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, LabelList, Label } from "recharts";
import SelectBox from "./selectBox";


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.75;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x < cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = (props) => {

  const [selectedOption, setSelectedOption] = useState("Monthly");
  const handleChange = (e) => {
    setSelectedOption(e.target.innerText);
  };
  const COLORS = ["green", "blue", "red"];
  let newData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 }
  ];
  newData =
      selectedOption.toLocaleLowerCase() === "daily"
        ? [
            { name: "Group A", value: 100 },
            { name: "Group B", value: 150 },
            { name: "Group C", value: 200 }
          ]
        : newData;    
  return (
    <div className="component-container">
      <div className="data-show">
        <div className="info-container">
          {props.colorInfo.map((item, index) => (
            <p key={index}>
              <span
                className="background"
                style={{ backgroundColor: `${item[0]}` }}
              ></span>
              <span>{item[1]}</span>
            </p>
          ))}
        </div>
        <div className="pie-container">
          <PieChart className="pos" width={320} height={360} style={{ position: "relative", zIndex: 1 }}>
            <Pie
              data={newData}
              cx={155}
              cy={200}
              innerRadius={70}
              outerRadius={120}
              fill="#8884d8"
              labelLine={false}
              label={renderCustomizedLabel}
              cornerRadius={5}
              paddingAngle={1}
              dataKey="value"
            >
              {newData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={props.colorInfo[index][0]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="pie-title">
              <div>
              <p>{props.totalValues<1000?props.totalValues:`${(props.totalValues / 1000)} K`}</p>
              <span>Total Users</span>
              </div>
          </div>
        </div>
      </div>
      <div className="component-header">
        <div>
          <h2>{props.title}</h2>
        </div>
        <div>
          <SelectBox selections={props.selections} selectedOption={selectedOption} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
