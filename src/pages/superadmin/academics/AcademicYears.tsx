import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AcademicYears = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Academic Years</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Academic Year
        </Button>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Current Academic Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">2023-2024</h3>
                  <p className="text-sm text-muted-foreground">
                    September 2023 - June 2024
                  </p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Previous Academic Years</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">2022-2023</h3>
                  <p className="text-sm text-muted-foreground">
                    September 2022 - June 2023
                  </p>
                </div>
                <Button variant="outline">View Details</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">2021-2022</h3>
                  <p className="text-sm text-muted-foreground">
                    September 2021 - June 2022
                  </p>
                </div>
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AcademicYears;
