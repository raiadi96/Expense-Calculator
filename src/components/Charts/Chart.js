import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const max_datapoint = Math.max(...props.datapoints.map((item) => item.value));
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          label={datapoint.label}
          key={datapoint.label}
          max={max_datapoint}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
