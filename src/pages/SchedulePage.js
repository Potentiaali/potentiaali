import React from "react";
import { Schedule } from "../components/Schedule";
import scheduleData from "../components/scheduleData";

export const SchedulePage = () => {
  return (
    <div className="page">
      <h1>Aikataulu</h1>
      <Schedule start={14} end={20} schedule={scheduleData}/>
    </div>
  );
};
