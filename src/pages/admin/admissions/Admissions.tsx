import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

const Admissions = () => {
  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>New Student Admission</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Admission Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="admissionNumber">Admission Number *</Label>
                <Input id="admissionNumber" defaultValue="HS240307" required />
        </div>
              <div className="space-y-2">
                <Label>Admission Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>29 May 2025</span>
            </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Personal Details */}
              <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="middleName">Middle Name</Label>
                  <Input id="middleName" />
                  </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                  <Label>Date of Birth *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>29 May 2020</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" />
                    </PopoverContent>
                  </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                  <RadioGroup defaultValue="male" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="bloodGroup">Blood Group</Label>
                  <Select defaultValue="unknown">
                      <SelectTrigger>
                      <SelectValue placeholder="Select blood group" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="unknown">Unknown</SelectItem>
                      <SelectItem value="a+">A+</SelectItem>
                      <SelectItem value="a-">A-</SelectItem>
                      <SelectItem value="b+">B+</SelectItem>
                      <SelectItem value="b-">B-</SelectItem>
                      <SelectItem value="ab+">AB+</SelectItem>
                      <SelectItem value="ab-">AB-</SelectItem>
                      <SelectItem value="o+">O+</SelectItem>
                      <SelectItem value="o-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="birthPlace">Birth Place</Label>
                  <Input id="birthPlace" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Select defaultValue="somalia">
                      <SelectTrigger>
                      <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="somalia">
                        Somalia (Soomaaliya)
                      </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="motherTongue">Mother Tongue</Label>
                  <Input id="motherTongue" />
                  </div>
                  </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                      <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="sc">SC</SelectItem>
                        <SelectItem value="st">ST</SelectItem>
                        <SelectItem value="obc">OBC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="religion">Religion</Label>
                  <Input id="religion" />
                </div>
                </div>
              </div>

            {/* Contact Details */}
              <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                  <Label htmlFor="address1">Address Line 1</Label>
                  <Input id="address1" />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="address2">Address Line 2</Label>
                  <Input id="address2" />
                </div>
                  </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" />
                </div>
                  </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                  <Label htmlFor="pinCode">Pin Code</Label>
                  <Input id="pinCode" />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select defaultValue="somalia">
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="somalia">
                        Somalia (Soomaaliya)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                  </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input id="mobile" />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" />
                </div>
                </div>
              </div>

            {/* Course & Batch Details */}
              <div className="space-y-4">
              <h3 className="text-lg font-semibold">Course & Batch Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                  <Label htmlFor="course">Course *</Label>
                  <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="course1">Course 1</SelectItem>
                      <SelectItem value="course2">Course 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="batch">Batch *</Label>
                  <Select>
                      <SelectTrigger>
                      <SelectValue placeholder="Select a batch" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="batch1">Batch 1</SelectItem>
                      <SelectItem value="batch2">Batch 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

            {/* Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Settings</h3>
              <div className="space-y-4">
                  <div className="space-y-2">
                  <Label htmlFor="biometricId">Biometric ID</Label>
                  <Input id="biometricId" />
                  </div>
                  <div className="flex items-center space-x-2">
                  <input type="checkbox" id="enableEmail" className="rounded" />
                  <Label htmlFor="enableEmail">Enable e-mail features</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="assignTransport"
                    className="rounded"
                  />
                  <Label htmlFor="assignTransport">Assign Transport</Label>
                </div>
              </div>
      </div>

            {/* Photo Upload */}
          <div className="space-y-4">
              <h3 className="text-lg font-semibold">Upload user's photo</h3>
              <div className="space-y-2">
                <Input type="file" accept="image/*" />
                <p className="text-sm text-gray-500">
                  Maximum image size is 500KB. Recommended resolution is 125x125
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Submit Application</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admissions;
