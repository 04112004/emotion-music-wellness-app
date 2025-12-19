import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

// Map emotions to numeric levels (for chart)
const emotionMap = {
  sad: 1,
  stress: 2,
  anger: 2,
  neutral: 3,
  calm: 4,
  happy: 5,
};

function MoodChart({ refreshKey }) {
  const [history, setHistory] = useState([]);

  // Fetch mood history whenever refreshKey changes
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/history")
      .then((res) => setHistory(res.data))
      .catch(() => {});
  }, [refreshKey]);

  const data = {
    labels: history.map((_, index) => `Entry ${index + 1}`),
    datasets: [
      {
        label: "Mood level",
        data: history.map(
          (item) => emotionMap[item.emotion] || 3
        ),
        fill: true,
        backgroundColor: "rgba(74,166,163,0.15)", // soft teal
        borderColor: "#4AA6A3",
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // important for fixed height
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0F172A",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      y: {
        display: false,
        min: 1,
        max: 5,
      },
      x: {
        grid: { display: false },
        ticks: {
          color: "#94A3B8",
          font: { size: 12 },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default MoodChart;
