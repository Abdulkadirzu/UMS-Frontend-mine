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
import { Download, Search, Upload } from "lucide-react";

const GenerateIndividualIDCard: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Generate Individual ID Card</h2>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Generate ID Card
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
          <Label>Select ID Card Template</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student ID Card</SelectItem>
              <SelectItem value="employee">Employee ID Card</SelectItem>
              <SelectItem value="visitor">Visitor ID Card</SelectItem>
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
            <Label>Photo</Label>
            <div className="flex items-center space-x-4">
              <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No photo</span>
              </div>
              <div className="flex flex-col space-y-2">
                <Button variant="outline" className="w-[200px]">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Photo
                </Button>
                <span className="text-sm text-gray-500">
                  Recommended size: 300x300 pixels
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Additional Information</Label>
            <Input placeholder="Enter any additional information" />
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Generate ID Card</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GenerateIndividualIDCard;
