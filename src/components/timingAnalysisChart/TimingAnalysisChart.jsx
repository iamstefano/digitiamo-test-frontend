import GaugeComponent from "react-gauge-component";
import styles from "./TimingAnalysisChart.module.scss";

const TimingAnalysisChart = () => {
  const chartStyle = {
    height: 340,
    width: 500,
  };

  return (
    <div className={styles.timingAnalysisChart}>
      <GaugeComponent
        id={styles.gauge1}
        type="radial"
        style={chartStyle}
        minValue="0"
        maxValue="1200"
        marginInPercent={{ top: 0.07, bottom: 0.0, left: 0.07, right: 0.07 }}
        arc={{
          colorArray: ["#FF2121", "#00FF15"],
          padding: 0.03,
          subArcs: [
            { limit: 600, lenght: 0.5 },
            { limit: 700, lenght: 0.2 },
            { limit: 800, lenght: 0.2 },
            { limit: 1000, lenght: 0.1 },
          ],
          cornerRadius: 30,
          width: 0.07,
        }}
        pointer={{ type: "blob", animationDelay: 0, width: 10 }}
        value={720}
        labels={{
          valueLabel: {
            style: {
              fontSize: "30px",
              fill: "#010100",
              textShadow: "0",
              transform: "translate(-0px, -145px)",
            },
          },
          tickLabels: {
            type: "outer",
            hideMinMax: "true",
            ticks: [{ value: 600 }, { value: 700 }, { value: 800 }],
            defaultTickValueConfig: {
              style: {
                fontSize: "12px",
                fill: "#010100",
              },
            },
            defaultTickLineConfig: {
              style: {
                fontSize: "0px",
              },
            },
          },
        }}
      />

      <p className={styles.textChartP}>Great!</p>
      <div className={styles.pageLoadValue}>
        <p>Page Load</p>
        <p>0.4s</p>
      </div>

      <GaugeComponent
        id={styles.gauge1}
        type="radial"
        style={chartStyle}
        minValue="0"
        maxValue="1200"
        marginInPercent={{ top: 0.07, bottom: 0.0, left: 0.07, right: 0.07 }}
        arc={{
          colorArray: ["#FF2121", "#00FF15"],
          padding: 0.03,
          subArcs: [
            { limit: 600, lenght: 0.5 },
            { limit: 700, lenght: 0.2 },
            { limit: 800, lenght: 0.2 },
            { limit: 1000, lenght: 0.1 },
          ],
          cornerRadius: 30,
          width: 0.07,
        }}
        pointer={{ type: "blob", animationDelay: 0, width: 10 }}
        value={720}
        labels={{
          valueLabel: {
            style: {
              fontSize: "30px",
              fill: "#010100",
              textShadow: "0",
              transform: "translate(-0px, -145px)",
            },
          },
          tickLabels: {
            type: "outer",
            hideMinMax: "true",
            ticks: [{ value: 600 }, { value: 700 }, { value: 800 }],
            defaultTickValueConfig: {
              style: {
                fontSize: "12px",
                fill: "#010100",
              },
            },
            defaultTickLineConfig: {
              style: {
                fontSize: "0px",
              },
            },
          },
        }}
      />

      <p className={styles.textChartP}>Great!</p>
      <div className={styles.pageLoadValue}>
        <p>First Interaction</p>
        <p>0.9s</p>
      </div>
    </div>
  );
};

export default TimingAnalysisChart;
