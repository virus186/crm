import styles from "../../../styles/Content.module.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Sales",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const data1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Last",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "This",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.contentTabs}>
          <div className={styles.contentCotegories}>
            <h2>Sales</h2>
          </div>
        </div>
        <div className={styles.contentTabs}>
          <div className={styles.contentCotegories}>
            <h2>Customers</h2>
          </div>
        </div>
        <div className={styles.contentTabs}>
          <div className={styles.contentCotegories}>
            <h2>Suppliers</h2>
          </div>
        </div>
        <div className={styles.contentTabs}>
          <div className={styles.contentCotegories}>
            <h2>Products</h2>
          </div>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.bar}>
          <h2>Sales</h2>
          <Line data={data1} width={400} height={400} />
        </div>
        <div className={styles.circle}>
          <h2>Customers Arravied</h2>
          <Doughnut data={data} width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
