import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const CreateEvent = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Create Event</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <Input type="text" placeholder="Enter event title" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start date
              </label>
              <Input
                type="datetime-local"
                defaultValue="2025-05-30T16:10"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End date
              </label>
              <Input
                type="datetime-local"
                defaultValue="2025-05-30T16:10"
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <Textarea placeholder="This event is a Holiday" className="h-32" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event audience
            </label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All users of the institution
                </SelectItem>
                <SelectItem value="students">Students only</SelectItem>
                <SelectItem value="staff">Staff only</SelectItem>
                <SelectItem value="custom">Select applicable users</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Create event</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
