import DonutChart from "@/components/donutchart";
import BaseLayout from "../components/layout";
import styles from "../styles/layout.module.css"
import LineChart from "@/components/linechart";

const pieData = [
  { type: 'A', value: 27 },
  { type: 'B', value: 25 },
  { type: 'C', value: 18 },
  { type: 'D', value: 15 },
  { type: 'E', value: 10 },
  { type: 'F', value: 5 },
];

const lineData = [
  { x: 'Jan', y: 100, category: 'A' },
  { x: 'Feb', y: 80, category: 'A' },
  { x: 'Mar', y: 40, category: 'A' },
  { x: 'Jan', y: 30, category: 'B' },
  { x: 'Feb', y: 20, category: 'B' },
  { x: 'Mar', y: 10, category: 'B' },
]

function ShowDashboard() {
  const passADiv = <div>Pass any div here, you must pass it!</div>;
  return (
    <BaseLayout>

      <div className={styles.chart} >
        <LineChart data={lineData} />
        <DonutChart data={pieData} />
      </div>

    </BaseLayout>
  );
}

export default ShowDashboard;
