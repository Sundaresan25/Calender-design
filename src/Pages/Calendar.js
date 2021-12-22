import React from "react";
import Topbar from "../Components/Calendar/Topbar";
import Acedmic from "../Components/Calendar/Acedmic";
import Days from "../Components/Calendar/Days";
import Weekdays from "../Components/Calendar/Weekdays";
import Weeklyhours from "../Components/Calendar/Weeklyhours";
import Holidays from "../Components/Calendar/Holidays";
import Total from "../Components/Calendar/Total";
import Calenderlist from "../Components/Calendar/Calenderlist";

const Calendar = () => {
  return (
    <>
      <Topbar />
      <Calenderlist />
      <Acedmic />
      <Days />
      <Weekdays />
      <Weeklyhours />
      <Holidays />
      <Total />
    </>
  );
};

export default Calendar;
