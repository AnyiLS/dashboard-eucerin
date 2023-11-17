import useControllers from "controllers";
import useViews from "views";
import {
  MdSupervisedUserCircle,
  MdBarChart,
  MdArrowDropUp,
} from "react-icons/md";
import LineChart from "views/components/chart/linechart";
import PieChart from "views/components/chart/pieChart";
import BarChart from "views/components/chart/Barchart";

const Dashboard = () => {
  const { useComponents } = useViews();
  const { Card } = useComponents();

  const { useScreensHooks } = useControllers();
  const { useDashboard } = useScreensHooks();
  const { dashboardInfo } = useDashboard();
  const { registered_users } = dashboardInfo;

  return (
    <div>
      <Card extra="!p-[20px] text-center mt-[40px]">
        <div className="flex justify-between">
          <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
            <MdSupervisedUserCircle />
            <span className="text-sm font-medium text-gray-600">
              Usuarios Registrados
            </span>
          </button>
          <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
            <MdBarChart className="h-6 w-6" />
          </button>
        </div>

        <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
          <div className="flex flex-col">
            <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
              {registered_users[0]?.total}
            </p>
            <div className="flex flex-col items-start">
              <p className="mt-2 text-sm text-gray-600 text-center">Hoy</p>
            </div>
          </div>
          <div className="h-full w-full">
            <LineChart
              chartOptions={{
                legend: {
                  show: false,
                },

                theme: {
                  mode: "light",
                },
                chart: {
                  type: "line",

                  toolbar: {
                    show: false,
                  },
                },

                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  curve: "smooth",
                },

                tooltip: {
                  style: {
                    fontSize: "12px",
                    fontFamily: undefined,
                    backgroundColor: "#000000",
                  },
                  theme: "dark",
                  x: {
                    format: "dd/MM/yy HH:mm",
                  },
                },
                grid: {
                  show: false,
                },
                xaxis: {
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                  labels: {
                    style: {
                      colors: "#A3AED0",
                      fontSize: "12px",
                      fontWeight: "500",
                    },
                  },
                  type: "text",
                  range: undefined,
                  categories: registered_users
                    .map((user: any) => user.date)
                    .reverse(),
                },

                yaxis: {
                  show: false,
                },
              }}
              chartData={[
                {
                  name: "Usuarios Registrados",
                  data: registered_users
                    .map((user: any) => user.total)
                    .reverse(),
                  color: "#4318FF",
                },
              ]}
            />
          </div>
        </div>
      </Card>
      <div className=" flex gap-5 mt-[20px]">
        <Card extra="rounded-[20px] p-3 w-[50%]">
          <div className="flex flex-row justify-between px-3 pt-2">
            <div>
              <h4 className="text-lg font-bold text-navy-700 dark:text-white">
                Usuarios Inactivos y Activos
              </h4>
            </div>

            <div className="mb-6 flex items-center justify-center">
              <select className="mb-3 flex items-center justify-center text-sm font-bold text-gray-600 me-2 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>

          <div className="mb-auto flex h-[220px] w-full items-center justify-center">
            <PieChart
              chartOptions={{
                labels: ["Your files", "System"],
                colors: ["#00C853", "#d50000"],
                chart: {
                  width: "50px",
                },
                states: {
                  hover: {
                    filter: {
                      type: "none",
                    },
                  },
                },
                legend: {
                  show: false,
                },
                dataLabels: {
                  enabled: false,
                },
                hover: { mode: null },
                plotOptions: {
                  donut: {
                    expandOnClick: false,
                    donut: {
                      labels: {
                        show: false,
                      },
                    },
                  },
                },
                fill: {
                  colors: ["#00c853", "#d50000"],
                },
                tooltip: {
                  enabled: true,
                  theme: "dark",
                  style: {
                    fontSize: "12px",
                    fontFamily: undefined,
                    backgroundColor: "#000000",
                  },
                },
              }}
              chartData={[
                100,
                (dashboardInfo?.inactive_users * 100) /
                  dashboardInfo?.total_users,
              ]}
            />
          </div>
          <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-[green]" />
                <p className="text-sm font-normal text-navy-600 ms-1">
                  Activos
                </p>
              </div>
              <p className="mt-px text-xl font-bold text-navy-700  dark:text-white">
                {dashboardInfo?.total_users ?? 0}
              </p>
            </div>

            <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-[#d50000]" />
                <p className="text-sm font-normal text-gray-600 ms-1">
                  Inactivos
                </p>
              </div>
              <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
                {dashboardInfo?.inactive_users}
              </p>
            </div>
          </div>
        </Card>

        <Card extra="pb-7 p-[20px] w-[50%]">
          <div className="flex flex-row justify-between">
            <div className="ml-1 pt-2">
              <p className="text-sm font-medium leading-4  text-gray-600">
                Certificados
              </p>
              <p className="text-[34px] font-bold text-navy-700 dark:text-white flex gap-[10px] items-center">
                {dashboardInfo?.total_users}
                <span className="text-sm font-medium leading-6 text-gray-600">
                   Total de Usuarioss
                </span>
              </p>
            </div>
            <div className="mt-2 flex items-start">
              <div className="flex items-center text-sm text-green-500">
                <MdArrowDropUp className="h-5 w-5" />
                <p className="font-bold">Total</p>
              </div>
            </div>
          </div>

          <div className="h-[300px] w-full pt-10 pb-0">
            <BarChart
              chartData={[
                {
                  name: "Daily Traffic",
                  data: [
                    dashboardInfo?.certifications?.course_1,
                    dashboardInfo?.certifications?.course_2,
                    dashboardInfo?.certifications?.course_3,
                    dashboardInfo?.certifications?.course_4,
                  ],
                },
              ]}
              chartOptions={{
                chart: {
                  toolbar: {
                    show: false,
                  },
                },
                tooltip: {
                  style: {
                    fontSize: "12px",
                    fontFamily: undefined,
                    backgroundColor: "#000000",
                  },
                  onDatasetHover: {
                    style: {
                      fontSize: "12px",
                      fontFamily: undefined,
                    },
                  },
                  theme: "dark",
                },
                xaxis: {
                  categories: [
                    "Dermoconsejo",
                    "Visita Médica Col",
                    "Dermoconsejo Ecu",
                    "Visita Médica Ecu",
                  ],
                  show: false,
                  labels: {
                    show: true,
                    style: {
                      colors: "#A3AED0",
                      fontSize: "14px",
                      fontWeight: "500",
                    },
                  },
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                },
                yaxis: {
                  show: false,
                  color: "black",
                  labels: {
                    show: true,
                    style: {
                      colors: "#CBD5E0",
                      fontSize: "14px",
                    },
                  },
                },
                grid: {
                  show: false,
                  strokeDashArray: 5,
                  yaxis: {
                    lines: {
                      show: true,
                    },
                  },
                  xaxis: {
                    lines: {
                      show: false,
                    },
                  },
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    type: "vertical",
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    colorStops: [
                      [
                        {
                          offset: 0,
                          color: "#4318FF",
                          opacity: 1,
                        },
                        {
                          offset: 100,
                          color: "rgba(67, 24, 255, 1)",
                          opacity: 0.28,
                        },
                      ],
                    ],
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                plotOptions: {
                  bar: {
                    borderRadius: 3,
                    columnWidth: "40px",
                  },
                },
              }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
