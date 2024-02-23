import { ResponsiveContainer, LineChart, Text, Line, CartesianGrid, XAxis, YAxis, Tooltip, CartesianAxis } from 'recharts';
import SelectBox from "./selectBox";
import React, { useState } from "react";
import { monthlyData, generateDailyData } from "./data/data";

const data = [
    { name: '2024-01-01', value: 59.50 },
    { name: '2024-01-02', value: 80 },
    { name: '2024-01-03', value: 62.25 },
    { name: '2024-01-04', value: 73 },
    { name: '2024-01-05', value: 90 },
    { name: '2024-01-06', value: 70 },
    { name: '2024-01-07', value: 30 },
    { name: '2024-01-08', value: 34 },
    { name: '2024-01-09', value: 28 },
    { name: '2024-01-10', value: 29 },
    { name: '2024-01-11', value: 32 },
    { name: '2024-01-12', value: 30 },
    { name: '2024-01-13', value: 20 },
    { name: '2024-01-14', value: 15 },
    { name: '2024-01-15', value: 19 },
    { name: '2024-01-16', value: 25 },
    { name: '2024-01-17', value: 35 },
    { name: '2024-01-18', value: 37 },
    { name: '2024-01-19', value: 50 },
    { name: '2024-01-20', value: 28 },
    { name: '2024-01-21', value: 29 },
    { name: '2024-01-22', value: 32 },
    { name: '2024-01-23', value: 30 },
    { name: '2024-01-24', value: 20 },
    { name: '2024-01-25', value: 15 },
    { name: '2024-01-26', value: 19 },
    { name: '2024-01-27', value: 25 },
    { name: '2024-01-28', value: 35 },
    { name: '2024-01-29', value: 37 },
    { name: '2024-01-30', value: 50 },
    { name: '2024-01-31', value: 70 }
];

const LineChartComponent = (props) => {
    const [selectedOption, setSelectedOption] = useState("monthly");
    const handleChange = (e) => {
        setSelectedOption(e.target.innerText);
    };
    let filteredData = monthlyData;
    filteredData =
        selectedOption.toLocaleLowerCase() === "monthly"
            ? monthlyData
            : generateDailyData();

    return (
        <div className="chart-container">
            <div className="chart-header">
                <span className='chart-title'>{props.title}</span>
                <div className="chart-colors">
                    {props.lineColors.map((item, index) => (
                        <div key={index} className='line-colors-item'>
                            <div
                                className='background'
                                style={{ backgroundColor: `red` }}></div>
                            <span>{item}</span>
                        </div>
                    ))}
                    <SelectBox
                        selections={props.selections}
                        selectedOption={selectedOption}
                        handleChange={handleChange}
                    />
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart width={600} height={300} data={data}>
                    <Line type="natural" dot={false} dataKey="value" stroke="#FF9500" strokeWidth={2} />
                    <CartesianGrid stroke='#E6EDFF' strokeDasharray="0 0" vertical={false} />
                    <XAxis dataKey="name" dy={10} tick={(tick) => customXTick(tick)} strokeWidth={0} tickCount={31} axisLine='false' />
                    <YAxis dataKey="value" dx={-15} dy={-5} tick={(tick) => customTick(tick)} strokeWidth={0} tickCount={6} axisLine='false' />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E6EDFF', strokeWidth: '27px', opacity: '30%' }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

const CustomTooltip = ({ active, payload, label }) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const outputDate = new Date(label).toLocaleDateString('en-UK', options);

    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <span className="label">{outputDate}</span>
                <span className="value">{payload[0].value}</span>
            </div>
        );
    }

    return null;
};

const customXTick = (tick) => {
    const { payload: { value } } = tick;
    tick['fill'] = '#7C8DB5';
    tick['fontSize'] = 14;
    tick['fontFamily'] = 'Poppins';


    return (
        <Text {...tick} >{new Date(value).getDate()}</Text>
    );
}

const customTick = (tick) => {
    const { payload: { value } } = tick;
    tick['fill'] = '#7C8DB5';
    tick['fontSize'] = 14;
    tick['fontFamily'] = 'Poppins';

    return (
        <Text {...tick} >{value}</Text>
    );
}

// const CustomCursor = props => {
//     const { x, y, width, height, stroke } = props;
//     return <Rectangle fill="red" stroke="red" x={x} y={y} width={width} height={height} />;
// };

export default LineChartComponent;