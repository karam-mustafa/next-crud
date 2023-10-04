import routes from "@/const/routes";
import { addNewCourse } from "@/store/actions/coursers.action";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

export default function AddNewCourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [Author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch("");
  const router = useRouter("");

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  const handleSubmit = () => {
    dispatch(
      addNewCourse({
        title,
        description,
        start_at: startAt,
        end_at: endAt,
        Author,
        image,
      })
    ).then(res => {
        if(res.payload.id){
            router.push(routes.get)
        }
    });
  };
  return (
    <div className="m-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>description</Form.Label>
        <Form.Control
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
        <Form.Control onChange={(e) => setAuthor(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Start at</Form.Label>
        <Form.Control
          onChange={(e) => setStartAt(e.target.value)}
          type="date"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>End at</Form.Label>
        <Form.Control onChange={(e) => setEndAt(e.target.value)} type="date" />
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
