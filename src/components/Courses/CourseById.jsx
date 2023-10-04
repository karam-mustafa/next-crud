import { getById } from "@/store/actions/coursers.action";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col } from "react-bootstrap";
import routes from "@/const/routes";

export default function CourseById() {
  const router = useRouter();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.courseById);
  useEffect(() => {
    if (router?.query?.id) {
      dispatch(getById(router?.query?.id));
    }
  }, [router]);

  return (
    <div>
      <Col md={6} sm={12} lg={12} className="mt-5">
        <Card>
          <Card.Img variant="top" src={course.image} />
          <Card.Body>
            <Card.Title>{course.title}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
            <Card.Text>Start at{course.start_at}</Card.Text>
            <Card.Text>End at{course.end_at}</Card.Text>
            <Card.Text>{course.auother}</Card.Text>
            <div class="d-grid gap-2">
              <Button
                variant="primary"
                onClick={() => {
                  router.push(routes.edit(course.id));
                }}
              >
                Edit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
