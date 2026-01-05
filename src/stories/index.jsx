import { storiesOf } from "@storybook/react";
import { Accordion } from "../components/accordion/Accordion";
import { Schedule } from "../components/Schedule/Schedule";
import { SingleSchedule } from "../components/Schedule/SingleSchedule";
import scheduleData from "../data/schedule";

storiesOf("Accordion", module)
  .add("Single accordion, with text", () => (
    <Accordion title="Accordion">Hello world!</Accordion>
  ))
  .add("Multiple accordions, with text", () => (
    <>
      <Accordion title="Accordion 1">Hello world!</Accordion>
      <Accordion title="Accordion 2">Hello world!</Accordion>
      <Accordion title="Accordion 3">Hello world!</Accordion>
    </>
  ));
storiesOf("Schedule", module).add("Schedule, with data", () => (
  <Schedule start={"14"} end={"20"} schedule={scheduleData["workshops"]} />
));
storiesOf("SingleSchedule", module).add("SingleSchedule, with data", () => (
  <SingleSchedule
    start={"14:00"}
    end={"20:00"}
    scheduleData={scheduleData["workshops"]}
    type={"workshops"}
  />
));
