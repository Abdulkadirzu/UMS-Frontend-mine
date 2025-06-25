import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { students } from "@/utils/mockData";
import { Pencil, Settings, FileText } from "lucide-react";
import SidebarLayout from "@/components/layout/SidebarLayout";

const ProfilePage = () => {
  const { user } = useAuth();

  // Find the student details based on logged-in user
  const student = students.find((s) => s.name === user?.name) || students[0];

  return (
    <SidebarLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Summary Card */}
          <Card className="md:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage
                    src={`https://ui-avatars.com/api/?name=${student.name}&background=random`}
                  />
                  <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{student.name}</h2>
                <p className="text-gray-500">{student.rollNumber}</p>
                <p className="text-sm text-gray-500 mb-4">{student.program}</p>

                <Button variant="outline" className="w-full mb-2">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>

                <Button variant="outline" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </Button>
              </div>

              <div className="mt-6 border-t pt-4">
                <h3 className="font-medium mb-2">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email:</span>
                    <span>{student.email || "student@university.edu"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Phone:</span>
                    <span>{student.phone || "+254 712 345 678"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Address:</span>
                    <span>
                      {student.address || "University Housing, Block B"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Profile Content */}
          <div className="md:col-span-2">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Full Name
                          </h4>
                          <p>{student.name}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Roll Number
                          </h4>
                          <p>{student.rollNumber}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Date of Birth
                          </h4>
                          <p>{student.dob || "15 May 2000"}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Gender
                          </h4>
                          <p>{student.gender || "Male"}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Nationality
                          </h4>
                          <p>{student.nationality || "Kenyan"}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            ID/Passport
                          </h4>
                          <p>{student.idNumber || "12345678"}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h3 className="font-medium mb-2">Emergency Contact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">
                              Name
                            </h4>
                            <p>
                              {student.emergencyContact?.name ||
                                "Parent/Guardian Name"}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">
                              Relationship
                            </h4>
                            <p>
                              {student.emergencyContact?.relationship ||
                                "Parent"}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">
                              Phone
                            </h4>
                            <p>
                              {student.emergencyContact?.phone ||
                                "+254 723 456 789"}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">
                              Email
                            </h4>
                            <p>
                              {student.emergencyContact?.email ||
                                "parent@example.com"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="academic" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Program
                          </h4>
                          <p>{student.program}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Class
                          </h4>
                          <p>{student.class}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Enrollment Year
                          </h4>
                          <p>{student.enrollmentYear || "2022"}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Expected Graduation
                          </h4>
                          <p>{student.graduationYear || "2026"}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Current GPA
                          </h4>
                          <p>{student.gpa || "3.75"}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Credits Completed
                          </h4>
                          <p>
                            {student.creditsCompleted || "48"} /{" "}
                            {student.totalCredits || "120"}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h3 className="font-medium mb-2">Academic Advisor</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">
                              Name
                            </h4>
                            <p>{student.advisor?.name || "Dr. Jane Smith"}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">
                              Department
                            </h4>
                            <p>
                              {student.advisor?.department ||
                                "Computer Science"}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">
                              Email
                            </h4>
                            <p>
                              {student.advisor?.email ||
                                "j.smith@university.edu"}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">
                              Office Hours
                            </h4>
                            <p>
                              {student.advisor?.officeHours ||
                                "Mon, Wed: 10am-12pm"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Documents & Records</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "ID Card",
                        "Admission Letter",
                        "Previous Transcripts",
                        "Medical Records",
                      ].map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border rounded-md"
                        >
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 mr-3 text-gray-500" />
                            <span>{doc}</span>
                          </div>
                          <div>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      ))}

                      <div className="pt-4">
                        <Button>Upload New Document</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default ProfilePage;
