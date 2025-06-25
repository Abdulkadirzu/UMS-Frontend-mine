import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const DepartmentManagement = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Department Management</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Department
        </Button>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Departments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Computer Science</h3>
                  <p className="text-sm text-muted-foreground">
                    Head: Dr. John Smith
                  </p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DepartmentManagement;
