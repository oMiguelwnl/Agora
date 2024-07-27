"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../utils/Heading";
import OrdersAnalytics from "../../components/Admin/Analytics/OrdersAnalytics";
import DashboardHeader from "../../components/Admin/DashboardHeader";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="Ágora - Admin"
        description="Ágora is a platform for students to learn and get help from teachers"
        keywords="Programming,MERN,Redux,Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <OrdersAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
