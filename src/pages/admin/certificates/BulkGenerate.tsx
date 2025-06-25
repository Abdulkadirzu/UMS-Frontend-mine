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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, Upload } from "lucide-react";

const BulkGenerate: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Bulk Generate Certificates</h2>
        <div className="flex space-x-4">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import List
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Generate Certificates
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
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

        <div className="space-y-2">
          <Label>Select Course</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="btech">B.Tech</SelectItem>
              <SelectItem value="mba">MBA</SelectItem>
              <SelectItem value="mca">MCA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Select Batch</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Roll Number</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>BT2024001</TableCell>
              <TableCell>B.Tech</TableCell>
              <TableCell>2024</TableCell>
              <TableCell>
                <span className="text-green-600">Ready</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>BT2024002</TableCell>
              <TableCell>B.Tech</TableCell>
              <TableCell>2024</TableCell>
              <TableCell>
                <span className="text-green-600">Ready</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>Mike Johnson</TableCell>
              <TableCell>BT2024003</TableCell>
              <TableCell>B.Tech</TableCell>
              <TableCell>2024</TableCell>
              <TableCell>
                <span className="text-yellow-600">Pending</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">Selected: 2 of 3 students</div>
        <div className="flex space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Generate Selected</Button>
        </div>
      </div>
    </div>
  );
};

export default BulkGenerate;
