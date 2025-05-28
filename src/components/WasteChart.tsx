
import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";

Chart.register(...registerables);

interface WasteChartProps {
  data: {
    labels: string[];
    values: number[];
    colors: string[];
  };
}

const WasteChart = ({ data }: WasteChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: "pie",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Waste Collection (kg)",
            data: data.values,
            backgroundColor: data.colors,
            borderColor: "#ffffff",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#444",
              font: {
                size: 14,
              },
            },
          },
        },
      },
    };

    chartInstance.current = new Chart(ctx, config);

    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} className="max-h-[400px] w-full"></canvas>;
};

export default WasteChart;
