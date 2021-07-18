import React, { useState } from "react";
import styled from "styled-components";

const Calender = () => {
  const dateRef = new Date();
  dateRef.setMonth(8);
  dateRef.setDate(1);
  const monthToday = dateRef.getMonth();
  const dayToday = dateRef.getDay();
  const dateToday = dateRef.getDate();

  const weekArr = ["S", "M", "T", "W", "T", "F", "S"];

  const getMonthToday = () => {
    switch (monthToday) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  };

  const getWeekDate = (index) => {
    let result = null;
    let firstDayOfMonth = new Date(
      dateRef.getFullYear(),
      dateRef.getMonth(),
      1
    );
    let lastDayofMonth = new Date(
      dateRef.getFullYear(),
      dateRef.getMonth() + 1,
      0
    );

    let lastDate = lastDayofMonth.getDate();
    if (index == dayToday) {
      result = dateToday;
    } else if (index > dayToday) {
      result = dateToday + (index - dayToday);
    } else if (index < dayToday) {
      result = dateToday - (dayToday - index);
    }

    return result > lastDate || result <= 0 ? null : result;
    // do a fix of previous month's dates
    console.log(lastDate);
  };

  return (
    <CalendarContainer>
      <Today>
        {dateToday} {getMonthToday()}
      </Today>
      <Week>
        {weekArr.map((day, index) => (
          <CalendarDate
            key={index}
            className="date"
            style={
              index === dayToday
                ? { backgroundColor: "rgb(255, 255, 255, 0.3)" }
                : { backgroundColor: "none" }
            }
          >
            <WeekDay>{weekArr[index]}</WeekDay>
            <WeekDate>{getWeekDate(index)}</WeekDate>
          </CalendarDate>
        ))}
      </Week>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  height: 10vh;
  width: 30vh;
  margin: 2rem;
  // border: 1px solid red;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const Today = styled.h1`
  margin: 0px 0px 0.5em 0.5em;
  color: white;
`;

const Week = styled.div`
  width: 100%;
  flex-grow: 1;
  //  border: 1px solid white;
  display: grid;
  grid-template-columns: repeat(7, auto);
`;

const CalendarDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid red;
`;

const WeekDay = styled.h3`
  font-weight: 300;
  color: whitesmoke;
`;

const WeekDate = styled.h4`
  font-weight: 600;
  color: whitesmoke;
`;

export default Calender;
