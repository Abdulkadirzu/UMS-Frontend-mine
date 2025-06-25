import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IDCardTemplates from "./IDCardTemplates";
import BulkGenerateIDCards from "./BulkGenerateIDCards";
import GenerateIndividualIDCard from "./GenerateIndividualIDCard";
import GeneratedIDCards from "./GeneratedIDCards";

const IDCards: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">ID Cards</h1>
        <p className="text-gray-500">
          Manage and generate ID cards for students and employees
        </p>
      </div>

      <Card>
        <Tabs defaultValue="templates" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="templates">ID Card Templates</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Generate</TabsTrigger>
            <TabsTrigger value="individual">Generate Individual</TabsTrigger>
            <TabsTrigger value="generated">Generated ID Cards</TabsTrigger>
          </TabsList>
          <TabsContent value="templates">
            <IDCardTemplates />
          </TabsContent>
          <TabsContent value="bulk">
            <BulkGenerateIDCards />
          </TabsContent>
          <TabsContent value="individual">
            <GenerateIndividualIDCard />
          </TabsContent>
          <TabsContent value="generated">
            <GeneratedIDCards />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default IDCards;
