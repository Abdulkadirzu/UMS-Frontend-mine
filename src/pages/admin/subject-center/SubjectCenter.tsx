import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseSubjects from "./CourseSubjects";
import LinkBatches from "./LinkBatches";
import SkillSets from "./SkillSets";

const SubjectCenter: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Subject Center</h1>
        <p className="text-gray-500">
          Manage subjects, link batches, and configure skill sets
        </p>
      </div>

      <Card>
        <Tabs defaultValue="course-subjects" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="course-subjects">Course Subjects</TabsTrigger>
            <TabsTrigger value="link-batches">Link Batches</TabsTrigger>
            <TabsTrigger value="skill-sets">Skill Sets</TabsTrigger>
          </TabsList>
          <TabsContent value="course-subjects">
            <CourseSubjects />
          </TabsContent>
          <TabsContent value="link-batches">
            <LinkBatches />
          </TabsContent>
          <TabsContent value="skill-sets">
            <SkillSets />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default SubjectCenter;
 