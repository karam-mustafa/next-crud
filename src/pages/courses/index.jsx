import AllCourses from "@/components/Courses/AllCourses";
import routes from "@/const/routes";
import MainLayouts from "@/layouts/MainLayouts";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

export default function index() {
  const router = useRouter();

  return (
    <MainLayouts>
      <div className="d-grid">
        <Button
          variant="primary"
          className="mt-5 btn"
          onClick={() => router.push(routes.add)}
        >
          Add new cousrse
        </Button>
      </div>
      <AllCourses />
    </MainLayouts>
  );
}
