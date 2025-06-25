import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Settings as SettingsIcon,
  Save,
  Clock,
  Calendar,
  Bell,
} from "lucide-react";

const Settings: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Timetable Settings</h2>
          <p className="text-sm text-gray-500 mt-1">
            Configure timetable-related settings and preferences
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Time Settings</h3>
              <p className="text-sm text-gray-500">
                Configure time slots and breaks
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Default Class Duration (minutes)</Label>
              <Input type="number" defaultValue={60} />
            </div>

            <div className="space-y-2">
              <Label>Break Duration (minutes)</Label>
              <Input type="number" defaultValue={15} />
            </div>

            <div className="space-y-2">
              <Label>Lunch Break Duration (minutes)</Label>
              <Input type="number" defaultValue={60} />
            </div>

            <div className="space-y-2">
              <Label>Working Hours</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-gray-500">Start Time</Label>
                  <Input type="time" defaultValue="09:00" />
                </div>
                <div>
                  <Label className="text-sm text-gray-500">End Time</Label>
                  <Input type="time" defaultValue="17:00" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Calendar Settings</h3>
              <p className="text-sm text-gray-500">
                Configure academic calendar settings
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Academic Year</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select academic year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023-2024">2023-2024</SelectItem>
                  <SelectItem value="2024-2025">2024-2025</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Semester</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1st Semester</SelectItem>
                  <SelectItem value="2">2nd Semester</SelectItem>
                  <SelectItem value="3">3rd Semester</SelectItem>
                  <SelectItem value="4">4th Semester</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Working Days</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Switch id="monday" defaultChecked />
                  <Label htmlFor="monday">Monday</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="tuesday" defaultChecked />
                  <Label htmlFor="tuesday">Tuesday</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="wednesday" defaultChecked />
                  <Label htmlFor="wednesday">Wednesday</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="thursday" defaultChecked />
                  <Label htmlFor="thursday">Thursday</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="friday" defaultChecked />
                  <Label htmlFor="friday">Friday</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="saturday" />
                  <Label htmlFor="saturday">Saturday</Label>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <Bell className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Notification Settings</h3>
              <p className="text-sm text-gray-500">
                Configure notification preferences
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-gray-500">
                  Receive email notifications for timetable changes
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <p className="text-sm text-gray-500">
                  Receive push notifications for timetable changes
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Change Alerts</Label>
                <p className="text-sm text-gray-500">
                  Get alerts for timetable modifications
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Conflict Warnings</Label>
                <p className="text-sm text-gray-500">
                  Receive warnings for timetable conflicts
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <SettingsIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium">General Settings</h3>
              <p className="text-sm text-gray-500">
                Configure general timetable settings
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-save Changes</Label>
                <p className="text-sm text-gray-500">
                  Automatically save timetable changes
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Conflict Checking</Label>
                <p className="text-sm text-gray-500">
                  Enable automatic conflict checking
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Teacher Availability</Label>
                <p className="text-sm text-gray-500">
                  Check teacher availability before scheduling
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Room Availability</Label>
                <p className="text-sm text-gray-500">
                  Check room availability before scheduling
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
