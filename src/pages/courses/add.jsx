import AddNewCourseForm from "@/components/Courses/AddNewCourseForm";
import MainLayouts from "@/layouts/MainLayouts";
import React from "react";

export default function index() {
  return (
    <MainLayouts>
      <AddNewCourseForm />
    </MainLayouts>
  );
}
