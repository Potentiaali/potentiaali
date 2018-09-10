import React from "react";
import MarkdownPage from "../components/MarkdownPage";
import ScheduleMarkdown from "../data/pages/Schedule.md";

export const SchedulePage = () => {
  return <MarkdownPage markdownFile={ScheduleMarkdown} />;
};
