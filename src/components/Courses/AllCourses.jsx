import { useDispatch, useSelector } from "react-redux";
import { get } from "@/store/actions/coursers.action";
import React, { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import routes from "@/const/routes";

export default function AllCourses() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.data);
  const router = useRouter();
  useEffect(() => {
    dispatch(get());
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Row>
        {courses?.map((item, index) => {
          return (
            <Col md={6} sm={12} lg={4} key={index} className="mt-5">
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      router.push(routes.getById(item.id));
                    }}
                  >
                    See the details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </main>
  );
}
