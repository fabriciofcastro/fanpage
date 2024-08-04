"use client"

/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;

interface DataPoint {
  name: string;
  value: number;
  color: string;
}

const data:DataPoint[] = [
  { name: 'A', value: 33, color: '#ff0000' },
  { name: 'B', value: 33, color: '#ff7b00' },
  { name: 'C', value: 33, color: '#30cc00' },
];

const cx = 150;
const cy = 100;
const iR = 50;
const oR = 100;
const value = 65;

const needle = (value: number, data:DataPoint[], cx: number, cy: number, iR: number, oR: number, color: string) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key={color} cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key={color} d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

export default class PieChartWithNeedleCSS extends PureComponent {
  render() {
    return (
      <PieChart width={300} height={120} >
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, '#d0d000')}
      </PieChart>
    );
  }
}

