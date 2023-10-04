import CourseById from "@/components/Courses/CourseById";
import MainLayouts from "@/layouts/MainLayouts";
import React from "react";

export default function index() {
  return (
    <MainLayouts>
      <CourseById />
    </MainLayouts>
  );
}
