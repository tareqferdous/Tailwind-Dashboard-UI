import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar />
      <div className="pt-16 md:pt-20 pr-2 pl-2 md:pr-8 md:pl-28 lg:pl-72">
        <div className="text-lg md:text-xl text-gray-700 pl-3 md:pl-0 font-bold w-full border-b-2 pb-1 md:pb-3">
          <h3>Inventory</h3>
        </div>
        <div className="pt-2 md:pt-5">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
