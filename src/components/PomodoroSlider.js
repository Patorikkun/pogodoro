import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";

const PomodoroSlider = () => {
  return (
    <ScrollContainer
      vertical={false}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(100, 0.25em)",
        //border: "1px solid yellow",
        width: "4em",
        height: "50%",
        alignItems: "center",
        cursor: "grab",
        marginBottom: "1rem",
      }}
    >
      <BigTick>
        <Tick className="big"></Tick>
        <NumberTick>0</NumberTick>
      </BigTick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <BigTick>
        <Tick className="big"></Tick>
        <NumberTick>5</NumberTick>
      </BigTick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <BigTick>
        <Tick className="big"></Tick>
        <NumberTick>10</NumberTick>
      </BigTick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <BigTick>
        <Tick className="big"></Tick>
        <NumberTick>15</NumberTick>
      </BigTick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <BigTick>
        <Tick className="big"></Tick>
        <NumberTick>20</NumberTick>
      </BigTick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>

      <BigTick>
        <Tick className="big"></Tick>
        <NumberTick>25</NumberTick>
      </BigTick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <Tick></Tick>
      <BigTick>
        <Tick className="big"></Tick>
        <NumberTick>30</NumberTick>
      </BigTick>
    </ScrollContainer>
  );
};
/*
const TickContainer = styled.div`
  width: 5em;
  height: 25%;
  background-color: purple;
  display: grid;
  grid-template-columns: repeat(100, 0.25em);
  overflow-x: scroll;
  overflow-y: hidden;
  cursor: grab;
  overflow-x: scroll;
  overflow-y: hidden;
  //flex-direction: column;
`;*/

const Tick = styled.div`
  //border: 1px solid red;
  height: 0.3em;
  width: 0.05em;
  background-color: white;
  border-radius: 1em;
  // align-self: safe flex-end;
  // margin: 0 1em;

  &.big {
    height: 60%;
  }
`;

const BigTick = styled.div`
  // border: 1px solid red;
  //align-self: flex-end;
  width: 0.05em;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const NumberTick = styled.p`
  color: white;
  font-size: 1rem;
`;

export default PomodoroSlider;
