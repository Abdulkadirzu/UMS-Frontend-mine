import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page not found</p>
        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="mt-6" onClick={() => navigate("/")}>
          Go back home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
