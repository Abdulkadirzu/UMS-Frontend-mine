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

const CertificateTemplates: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Create Certificate Template</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Template
        </Button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Certificate Name (Heading)</Label>
            <Input placeholder="e.g., Certificate of Employment" />
          </div>

          <div className="space-y-2">
            <Label>Applicable User Type</Label>
            <RadioGroup defaultValue="employee" className="flex space-x-4">
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
            <Label>Certificate Serial Number</Label>
            <RadioGroup defaultValue="auto" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="manual" id="manual" />
                <Label htmlFor="manual">Enter Manually while generating</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="auto" id="auto" />
                <Label htmlFor="auto">Auto Generate</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Serial no prefix</Label>
            <Input placeholder="e.g., EMP" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Select Resolution</Label>
          <Select defaultValue="a4">
            <SelectTrigger>
              <SelectValue placeholder="Select resolution" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a4">A4</SelectItem>
              <SelectItem value="a5">A5</SelectItem>
              <SelectItem value="letter">Letter</SelectItem>
            </SelectContent>
          </Select>
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
            <Label>Barcode</Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Generate for</Label>
                <Select defaultValue="employee_number">
                  <SelectTrigger>
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee_number">Employee No</SelectItem>
                    <SelectItem value="student_id">Student ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Orientation</Label>
                <Select defaultValue="horizontal">
                  <SelectTrigger>
                    <SelectValue placeholder="Select orientation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="horizontal">Horizontal</SelectItem>
                    <SelectItem value="vertical">Vertical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>User Photo Style - Front</Label>
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
            <Label>Certificate Content</Label>
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

export default CertificateTemplates;
