import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const state = {
    series: [
      {
        name: "Orders",
        data: [44, 55, 41, 67, 22, 43, 21, 44, 45, 12, 67, 89],
      },
      {
        name: "Revenue",
        data: [34, 65, 51, 47, 52, 33, 51, 24, 35, 32, 47, 69],
      },
      {
        name: "Sellers",
        data: [12, 45, 21, 67, 22, 43, 21, 44, 45, 12, 67, 89],
      },
    ],
    options: {
      color: ["#181ee8", "#181338"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#064420",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#064420",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-3xl font-bold">Tk 6566</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-green-950 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-3xl font-bold">20</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <RiProductHuntLine className="text-green-950 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-md font-medium">Sellers</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <FaUsers className="text-green-950 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-3xl font-bold">12</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <AiOutlineShoppingCart className="text-green-950 shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap mt-7 ">
        <div className="w-full lg:w-7/12 lg:pr-3 ">
          <div className="w-full bg-[#ededed] p-4 rounded-md border border-slate-100">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#ededed] p-4 rounded-md text-[#6d6c6c] border border-slate-100">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#3c3840] pb-3">
                Recent seller message
              </h2>
              <Link className="font-semibold text-sm text-[#3c3840]">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-[#3c3840]">
              <ol className="relative border-1 border-slate-600 ml-4">
                <li className="mb-3 ml-6 ">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4e5447] rounded-full z-10">
                    <img
                      className="rounded-full w-full h-full shadow-lg"
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        4 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-white rounded-lg border border-slate-950/50">
                      how are you?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6 ">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4e5447] rounded-full z-10">
                    <img
                      className="rounded-full w-full h-full shadow-lg"
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        4 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-white rounded-lg border border-slate-950/50">
                      how are you?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6 ">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4e5447] rounded-full z-10">
                    <img
                      className="rounded-full w-full h-full shadow-lg"
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        4 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-white rounded-lg border border-slate-950/50">
                      how are you?
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-[#ededed] rounded-md mt-6 border border-slate-100">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-green-950 pb-3">
            Recent orders
          </h2>
          <Link className="font-semibold text-sm text-green-950">View All</Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-green-950">
            <thead className="text-sm text-green-950 uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    #12345678
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    Tk 1200
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <span>pending</span>
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <span>pending</span>
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <Link>view</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
