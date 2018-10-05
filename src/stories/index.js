import React from "react";

import { storiesOf } from "@storybook/react";
import { Accordion } from "../components/Accordion";
import { Schedule } from "../components/Schedule";
import scheduleData from "../components/scheduleData";

storiesOf("Accordion", module)
  .add("Single accordion, with text", () => (
    <Accordion title="Accordion">Hello world!</Accordion>
  ))
  .add("Multiple accordions, with text", () => (
    <React.Fragment>
      <Accordion title="Accordion 1">Hello world!</Accordion>
      <Accordion title="Accordion 2">Hello world!</Accordion>
      <Accordion title="Accordion 3">Hello world!</Accordion>
    </React.Fragment>
  ));
storiesOf("Schedule", module).add("Schedule, with data", () => (
  <Schedule start={14} end={20} schedule={scheduleData} />
));
