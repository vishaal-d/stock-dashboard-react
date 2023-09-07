import React, { useState } from 'react';
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { mockHistoricalData } from '../constants/mock';
import { convertUnixTimestampToDate } from '../helpers/date-helper';
import Card from './Card';

const Chart = () => {
    const [data, setData] = useState(mockHistoricalData);
    const [filter, setFilter] = useState("1W")

const formatData = (data) => {
    return data.c.map((item,index) => {
        return {
            value: item.toFixed(2),
            date: convertUnixTimestampToDate(data.t[index])
        }
    })
}
  return (
    <Card>
        <ResponsiveContainer>
            <AreaChart data={formatData(data)}>
                <Area 
                type="monostone" 
                dataKey="value" 
                stroke="#321e81" 
                fillOpacity={1} 
                strokeWidth={0.5}/>
            </AreaChart>
            <Tooltip/>
            <XAxis dataKey={"date"} />
            <YAxis domain={["dataMin", "dataMax"]}/>
        </ResponsiveContainer>
    </Card>
  )
}

export default Chart