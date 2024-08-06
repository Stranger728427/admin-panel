"use client";

import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Sample data
  const stats = {
    totalCabs: 150,
    totalRides: 12345,
    activeCabs: 120,
    totalRevenue: 45678,
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Rides",
        data: [1200, 1900, 1500, 2000, 1700, 2200],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const barData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Cabs",
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

  const doughnutData = {
    labels: ["Available", "On Ride", "Maintenance", "Offline"],
    datasets: [
      {
        label: "Cab Status",
        data: [70, 50, 20, 10],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const cabs = [
    { id: 1, driver: "John Doe", status: "Available", location: "Downtown" },
    { id: 2, driver: "Jane Smith", status: "On Ride", location: "Uptown" },
    { id: 3, driver: "Mike Johnson", status: "Maintenance", location: "Garage" },
    // Add more cab details as needed
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Cab Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Total Cabs</h2>
          <p className="text-2xl font-bold">{stats.totalCabs}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Total Rides</h2>
          <p className="text-2xl font-bold">{stats.totalRides}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Active Cabs</h2>
          <p className="text-2xl font-bold">{stats.activeCabs}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <p className="text-2xl font-bold">${stats.totalRevenue}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Rides Over Time</h2>
          <Line data={lineData} />
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Cab Status Distribution</h2>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      {/* Cabs Table */}
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Cabs Details</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b-2 p-2">ID</th>
              <th className="border-b-2 p-2">Driver</th>
              <th className="border-b-2 p-2">Status</th>
              <th className="border-b-2 p-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {cabs.map((cab) => (
              <tr key={cab.id}>
                <td className="border-b p-2">{cab.id}</td>
                <td className="border-b p-2">{cab.driver}</td>
                <td className="border-b p-2">{cab.status}</td>
                <td className="border-b p-2">{cab.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
