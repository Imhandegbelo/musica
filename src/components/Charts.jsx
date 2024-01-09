import { charts } from "../data/charts";
import ChartInfo from "./ChartInfo";

export default function Charts() {
  return (
    <div className="w-2/5 flex flex-col gap-[12px]">
      <h2 className="text-2xl text-[#EFEEE0] font-bold">Top charts</h2>
      {charts.map((chart) => (
        <ChartInfo key={chart.id} chart={chart} />
      ))}
    </div>
  );
}
