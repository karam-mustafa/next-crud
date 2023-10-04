import routes from "@/const/routes";
import {
  addNewCourse,
  editCourse,
  getById,
} from "@/store/actions/coursers.action";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

export default function EditCourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch("");
  const router = useRouter("");

  const course = useSelector((state) => state.courses.courseById);

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  useEffect(() => {
    if (router?.query?.id && !course?.id) {
      dispatch(getById(router?.query?.id)).then((res) => {
        setTitle(res.payload?.title);
        setDescription(res.payload?.description);
        setStartAt(res.payload?.start_at);
        setEndAt(res.payload?.end_at);
        setAuthor(res.payload?.author);
      });
    } else {
      setTitle(course?.title);
      setDescription(course?.description);
      setStartAt(course?.start_at);
      setEndAt(course?.end_at);
      setAuthor(course?.author);
    }
  }, [router]);

  const handleSubmit = () => {
    dispatch(
      editCourse({
        id: router?.query?.id,
        title,
        description,
        start_at: startAt,
        end_at: endAt,
        author,
        image,
      })
    ).then((res) => {
      router.push(routes.get);
    });
  };
  return (
    <div className="m-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control
          onChange={(e) => handleUploadImage(e.target.files[0])}
          type="file"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Start at</Form.Label>
        <Form.Control
          value={startAt}
          onChange={(e) => setStartAt(e.target.value)}
          type="date"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>End at</Form.Label>
        <Form.Control
          value={endAt}
          onChange={(e) => setEndAt(e.target.value)}
          type="date"
        />
      </Form.Group>
      <div className="d-grid">
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
