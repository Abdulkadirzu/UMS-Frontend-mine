import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus } from "lucide-react";

const IDCardTemplates: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Create ID Card Template</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Template
        </Button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>ID Card Name</Label>
            <Input placeholder="e.g., Student ID Card" />
          </div>

          <div className="space-y-2">
            <Label>Applicable User Type</Label>
            <RadioGroup defaultValue="student" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="employee" id="employee" />
                <Label htmlFor="employee">Employee</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Card Size</Label>
            <Select defaultValue="standard">
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">
                  Standard (85.6 x 53.98 mm)
                </SelectItem>
                <SelectItem value="large">Large (105 x 74 mm)</SelectItem>
                <SelectItem value="custom">Custom Size</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Orientation</Label>
            <RadioGroup defaultValue="landscape" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="landscape" id="landscape" />
                <Label htmlFor="landscape">Landscape</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="portrait" id="portrait" />
                <Label htmlFor="portrait">Portrait</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Background Image</Label>
          <div className="flex items-center space-x-4">
            <Input type="file" className="w-[300px]" />
            <span className="text-sm text-gray-500">No file selected</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Top spacing (px)</Label>
            <Input type="number" placeholder="0" />
          </div>
          <div className="space-y-2">
            <Label>Right spacing (px)</Label>
            <Input type="number" placeholder="0" />
          </div>
          <div className="space-y-2">
            <Label>Bottom spacing (px)</Label>
            <Input type="number" placeholder="0" />
          </div>
          <div className="space-y-2">
            <Label>Left spacing (px)</Label>
            <Input type="number" placeholder="0" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Photo Style</Label>
            <div className="flex items-center space-x-4">
              <RadioGroup defaultValue="square" className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="square" id="square" />
                  <Label htmlFor="square">Square</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="circle" id="circle" />
                  <Label htmlFor="circle">Circle</Label>
                </div>
              </RadioGroup>
              <div className="flex items-center space-x-2">
                <Label>Dimension</Label>
                <Input type="number" className="w-20" placeholder="px" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>QR Code</Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Generate for</Label>
                <Select defaultValue="student_id">
                  <SelectTrigger>
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student_id">Student ID</SelectItem>
                    <SelectItem value="employee_id">Employee ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Size</Label>
                <Input type="number" placeholder="Size in pixels" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>ID Card Content</Label>
            <Textarea
              placeholder="Design the complete template, including header, body and footer using the editor below..."
              className="h-[200px]"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Template</Button>
        </div>
      </div>
    </div>
  );
};

export default IDCardTemplates;
