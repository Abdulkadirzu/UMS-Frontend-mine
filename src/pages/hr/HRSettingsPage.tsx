import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const HRSettingsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">HR Settings</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-approve">
                  Auto-approve Leave Requests
                </Label>
                <Switch id="auto-approve" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">
                  Enable Email Notifications
                </Label>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="attendance">Enable Attendance Tracking</Label>
                <Switch id="attendance" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payroll Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="payroll-day">Payroll Day</Label>
                <Input
                  id="payroll-day"
                  type="number"
                  min="1"
                  max="31"
                  placeholder="Enter day of month"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                <Input
                  id="tax-rate"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Enter tax rate"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leave Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="annual-leave">Annual Leave Days</Label>
                <Input
                  id="annual-leave"
                  type="number"
                  min="0"
                  placeholder="Enter annual leave days"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sick-leave">Sick Leave Days</Label>
                <Input
                  id="sick-leave"
                  type="number"
                  min="0"
                  placeholder="Enter sick leave days"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default HRSettingsPage;
