import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Search } from "lucide-react";

const GenerateIndividual: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Generate Individual Certificate
        </h2>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Generate Certificate
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Search Student/Employee</Label>
          <div className="flex space-x-2">
            <Input placeholder="Enter name, ID, or roll number" />
            <Button variant="outline">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Select Certificate Template</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="employment">
                Certificate of Employment
              </SelectItem>
              <SelectItem value="completion">
                Course Completion Certificate
              </SelectItem>
              <SelectItem value="achievement">
                Achievement Certificate
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value="John Doe" disabled />
            </div>
            <div className="space-y-2">
              <Label>ID/Roll Number</Label>
              <Input value="BT2024001" disabled />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Course</Label>
              <Input value="B.Tech" disabled />
            </div>
            <div className="space-y-2">
              <Label>Batch</Label>
              <Input value="2024" disabled />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Certificate Serial Number</Label>
            <Input placeholder="Enter serial number" />
          </div>

          <div className="space-y-2">
            <Label>Additional Notes</Label>
            <Input placeholder="Enter any additional notes or remarks" />
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Generate Certificate</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GenerateIndividual;
