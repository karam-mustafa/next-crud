import AddNewCourseForm from "@/components/Courses/AddNewCourseForm";
import EditCourseForm from "@/components/Courses/EditCourseForm";
import MainLayouts from "@/layouts/MainLayouts";
import React from "react";

export default function index() {
  return (
    <MainLayouts>
      <EditCourseForm />
    </MainLayouts>
  );
}
