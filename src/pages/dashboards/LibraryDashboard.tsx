import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LibraryDashboard = () => {
  const navigate = useNavigate();

  const librarySections = [
    {
      title: "Borrow Books",
      description: "Browse and borrow books from the library",
      path: "/library/borrow",
    },
    {
      title: "Return Books",
      description: "Return your borrowed books",
      path: "/library/return",
    },
    {
      title: "Penalties",
      description: "View any penalties for late returns",
      path: "/library/penalties",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Library Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {librarySections.map((section) => (
          <Card key={section.path}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">{section.description}</p>
              <Button
                onClick={() => navigate(section.path)}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Go to {section.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LibraryDashboard;
