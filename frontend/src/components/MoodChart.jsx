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

// 🔑 Backend base URL from Netlify env
const API_BASE = import.meta.env.VITE_API_BASE;

// Map emotions to numeric levels
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

  // Fetch mood history
  useEffect(() => {
    if (!API_BASE) return;

    axios
      .get(`${API_BASE}/history`)
      .then((res) => {
        setHistory(res.data || []);
      })
      .catch(() => {
        setHistory([]);
      });
  }, [refreshKey]);

  // 🔴 If no data yet, show placeholder chart
  const chartData =
    history.length === 0
      ? {
          labels: ["No data"],
          datasets: [
            {
              data: [3],
              fill: true,
              backgroundColor: "rgba(74,166,163,0.1)",
              borderColor: "#4AA6A3",
            },
          ],
        }
      : {
          labels: history.map((_, i) => `Entry ${i + 1}`),
          datasets: [
            {
              label: "Mood level",
              data: history.map(
                (item) => emotionMap[item.emotion] || 3
              ),
              fill: true,
              backgroundColor: "rgba(74,166,163,0.15)",
              borderColor: "#4AA6A3",
              tension: 0.4,
              pointRadius: 4,
            },
          ],
        };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 🔑 REQUIRED
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

  return <Line data={chartData} options={options} />;
}

export default MoodChart;
