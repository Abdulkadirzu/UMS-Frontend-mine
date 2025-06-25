import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BulkGenerate from "./BulkGenerate";
import CertificateTemplates from "./CertificateTemplates";
import GenerateIndividual from "./GenerateIndividual";
import GeneratedCertificates from "./GeneratedCertificates";

const Certificates: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Certificates</h1>
        <p className="text-gray-500">
          Manage and generate certificates for students and employees
        </p>
      </div>

      <Card>
        <Tabs defaultValue="templates" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="templates">Certificate Templates</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Generate</TabsTrigger>
            <TabsTrigger value="individual">Generate Individual</TabsTrigger>
            <TabsTrigger value="generated">Generated Certificates</TabsTrigger>
          </TabsList>
          <TabsContent value="templates">
            <CertificateTemplates />
          </TabsContent>
          <TabsContent value="bulk">
            <BulkGenerate />
          </TabsContent>
          <TabsContent value="individual">
            <GenerateIndividual />
          </TabsContent>
          <TabsContent value="generated">
            <GeneratedCertificates />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Certificates;
