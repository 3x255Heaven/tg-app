import ReactApexChart from "react-apexcharts";

const config = {
  series: [
    {
      name: "Users",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sales",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area" as const,
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth" as const,
    },
    colors: ["#BB8F32", "#F6DC94"],
    xaxis: {
      type: "datetime" as const,
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};

const Graph = () => {
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={config.options}
          series={config.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default Graph;
