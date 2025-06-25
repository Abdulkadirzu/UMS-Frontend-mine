import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

interface SkillSet {
  id: string;
  name: string;
  subjectSkills: number;
  formula: string;
}

const SkillSets: React.FC = () => {
  const skillSets: SkillSet[] = [
    {
      id: "1",
      name: "English Skills",
      subjectSkills: 5,
      formula:
        "Reading (30%) + Writing (30%) + Listening (20%) + Speaking (20%)",
    },
    {
      id: "2",
      name: "Mathematics Skills",
      subjectSkills: 4,
      formula: "Problem Solving (40%) + Calculations (30%) + Analysis (30%)",
    },
    {
      id: "3",
      name: "Science Skills",
      subjectSkills: 6,
      formula: "Theory (40%) + Practical (40%) + Research (20%)",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search skill sets..."
            className="w-[300px]"
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create a Skill Set
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Skill Set</TableHead>
              <TableHead>No. of Subject Skills</TableHead>
              <TableHead>Formula</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skillSets.map((skillSet) => (
              <TableRow key={skillSet.id}>
                <TableCell>{skillSet.name}</TableCell>
                <TableCell>{skillSet.subjectSkills}</TableCell>
                <TableCell>{skillSet.formula}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default SkillSets;
