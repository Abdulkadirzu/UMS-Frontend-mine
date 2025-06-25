import React from "react";
import {
  Building2,
  Users,
  BookOpen,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Briefcase,
  Clock,
  MapPin,
  Users2,
} from "lucide-react";

const DepartmentsPage: React.FC = () => {
  // This would typically come from the user's profile/context
  const lecturerDepartment = {
    id: 1,
    name: "Computer Science",
    head: "Dr. John Smith",
    email: "john.smith@university.edu",
    phone: "+1 (555) 123-4567",
    staffCount: 15,
    courses: [
      {
        code: "CS101",
        name: "Introduction to Programming",
        semester: "Fall 2024",
        students: 45,
        schedule: [
          {
            day: "Monday",
            time: "09:00 AM - 10:30 AM",
            room: "Room 101",
            type: "Lecture",
          },
          {
            day: "Wednesday",
            time: "02:00 PM - 03:30 PM",
            room: "Lab 3",
            type: "Practical",
          },
        ],
        description: "Fundamental concepts of programming using Python",
        credits: 3,
        prerequisites: "None",
      },
      {
        code: "CS201",
        name: "Data Structures",
        semester: "Spring 2024",
        students: 38,
        schedule: [
          {
            day: "Tuesday",
            time: "10:00 AM - 11:30 AM",
            room: "Room 203",
            type: "Lecture",
          },
          {
            day: "Thursday",
            time: "01:00 PM - 02:30 PM",
            room: "Lab 2",
            type: "Practical",
          },
        ],
        description: "Study of fundamental data structures and algorithms",
        credits: 4,
        prerequisites: "CS101",
      },
      {
        code: "CS301",
        name: "Database Systems",
        semester: "Fall 2024",
        students: 42,
        schedule: [
          {
            day: "Monday",
            time: "01:00 PM - 02:30 PM",
            room: "Room 305",
            type: "Lecture",
          },
          {
            day: "Friday",
            time: "10:00 AM - 11:30 AM",
            room: "Lab 1",
            type: "Practical",
          },
        ],
        description: "Introduction to database design and management",
        credits: 3,
        prerequisites: "CS201",
      },
    ],
    description:
      "The Department of Computer Science focuses on cutting-edge research and education in computing technologies.",
    facilities: [
      "Computer Labs",
      "Research Center",
      "Conference Room",
      "Student Lounge",
    ],
    achievements: [
      "Top 10 Computer Science Department 2023",
      "Research Excellence Award 2023",
      "Industry Partnership Award 2024",
    ],
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold">{lecturerDepartment.name}</h1>
        </div>

        <p className="text-gray-600 mb-6">{lecturerDepartment.description}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Department Head</p>
                <p className="font-medium">{lecturerDepartment.head}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{lecturerDepartment.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{lecturerDepartment.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Staff Members</p>
                <p className="font-medium">{lecturerDepartment.staffCount}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Achievements</p>
                <ul className="list-disc list-inside text-sm">
                  {lecturerDepartment.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Facilities</p>
                <ul className="list-disc list-inside text-sm">
                  {lecturerDepartment.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Your Courses
          </h2>
          <div className="grid gap-6">
            {lecturerDepartment.courses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{course.name}</h3>
                    <p className="text-sm text-gray-500">Code: {course.code}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{course.semester}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Users2 className="w-4 h-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Credits</p>
                    <p className="font-medium">{course.credits}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Prerequisites</p>
                    <p className="font-medium">{course.prerequisites}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Schedule</h4>
                  <div className="space-y-2">
                    {course.schedule.map((session, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 text-sm"
                      >
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{session.day}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span>{session.room}</span>
                        </div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {session.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPage;
