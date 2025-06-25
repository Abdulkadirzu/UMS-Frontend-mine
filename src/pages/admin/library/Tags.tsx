import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tag } from "lucide-react";

const LibraryTags = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Tags</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Tag</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Tag Name</Label>
                <Input placeholder="Enter tag name" />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Input placeholder="Enter category" />
              </div>
            </div>
            <Button className="w-full">
              <Tag className="mr-2 h-4 w-4" />
              Add Tag
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LibraryTags;
