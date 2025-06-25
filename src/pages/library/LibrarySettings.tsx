import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const LibrarySettings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Library Settings
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Configure library settings and parameters
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Maximum Books Per Student</Label>
                <Input type="number" placeholder="Enter maximum books" />
              </div>
              <div className="space-y-2">
                <Label>Maximum Days Per Issue</Label>
                <Input type="number" placeholder="Enter maximum days" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Fine Per Day (USD)</Label>
                <Input type="number" placeholder="Enter fine amount" />
              </div>
              <div className="space-y-2">
                <Label>Grace Period (Days)</Label>
                <Input type="number" placeholder="Enter grace period" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Maximum Renewals</Label>
                <Input type="number" placeholder="Enter maximum renewals" />
              </div>
              <div className="space-y-2">
                <Label>Renewal Period (Days)</Label>
                <Input type="number" placeholder="Enter renewal period" />
              </div>
            </div>

            <Button className="w-full">Save Settings</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Due Date Reminder (Days Before)</Label>
                <Input type="number" placeholder="Enter days" />
              </div>
              <div className="space-y-2">
                <Label>Fine Notification (Days After Due)</Label>
                <Input type="number" placeholder="Enter days" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Reservation Hold Period (Days)</Label>
                <Input type="number" placeholder="Enter days" />
              </div>
              <div className="space-y-2">
                <Label>Maximum Reservations Per Student</Label>
                <Input type="number" placeholder="Enter maximum reservations" />
              </div>
            </div>

            <Button className="w-full">Save Notification Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LibrarySettings;
