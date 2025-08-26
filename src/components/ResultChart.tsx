"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function ResultChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis type="category" dataKey="name" width={120} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="value" fill="var(--red)" isAnimationActive />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
