import React, { Fragment } from "react";
import GroupChart from "./Hospital/GroupChart";
import PieChart from "./Hospital/Piechart";
import SingleLineChart from "./Hospital/SingleLineChart";
import BarChart from "./Hospital/BarChart";
import LineChart from "./Hospital/LineChart";

const HospitalData = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex text-black justify-center gap-3 mx-5 h-[50vh]">

        <div className="bg-white shadow-xl shadow-slate-300 w-full ">
          <GroupChart />
        </div>
        <div className="bg-white shadow-xl shadow-slate-300 w-full">
          <PieChart />
        </div>
      </section>

      <section className="flex gap-3 h-[50vh] mx-5">
        <div className="bg-white shadow-xl shadow-slate-300 w-1/2">
          <SingleLineChart />
        </div>

        {/* <div className="flex flex-col items-center justify-center gap-3 w-full ">
          <div className="flex items-center justify-center bg-white shadow-xl w-1/2 shadow-slate-300">
            <BarChart />
          </div>
        </div> */}

      </section>

      <section className="bg-white shadow-xl shadow-slate-300 h-[90vh] mx-5">
        <LineChart />
      </section>
    </div>
  );
};


const Analytics = () => {

  return (
    <Fragment>
      <h1 className="text-4xl p-5 tracking-widest">Analytics</h1>
      <HospitalData />
    </Fragment>
  );
};

export default Analytics;
