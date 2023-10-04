import apis from "@/const/apis";
import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const get = createAsyncThunk("courses/get", async () => {
  return await axiosInstance.get(apis.courses.get).then((res) => {
    return res.data;
  });
});

export const getById = createAsyncThunk("courses/get-by-id", async (id) => {
  return await axiosInstance.get(apis.courses.getById(id)).then((res) => {
    return res.data;
  });
});
export const addNewCourse = createAsyncThunk(
  "courses/add",
  async (data) => {
    console.log(data);
    return await axiosInstance.post(apis.courses.add, data).then((res) => {
      return res.data;
    });
  }
);
export const editCourse = createAsyncThunk(
  "courses/edit",
  async (data) => {
    return await axiosInstance.patch(apis.courses.edit(data.id), data).then((res) => {
      return res.data;
    });
  }
);
