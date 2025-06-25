import SidebarLayout from "@/components/layout/SidebarLayout";

type Unit = {
  code: string;
  name: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  status: string;
};

type DaySchedule = {
  [key: string]: Unit;
};

type TimetableType = {
  [key in
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"]: DaySchedule;
};

const TimetablePage = () => {
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ] as const;
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ] as const;

  const timetable: TimetableType = {
    Monday: {
      "9:00 AM": {
        code: "CS101",
        name: "Introduction to Computer Science",
        date: "6/10/2025",
        time: "09:00 AM",
        duration: "3 hours",
        location: "Main Hall A",
        status: "Upcoming",
      },
      "11:00 AM": {
        code: "MAT201",
        name: "Advanced Calculus",
        date: "6/12/2025",
        time: "11:00 AM",
        duration: "2 hours",
        location: "Science Block Room 5",
        status: "Upcoming",
      },
      "2:00 PM": {
        code: "ENG102",
        name: "Academic Writing",
        date: "6/15/2025",
        time: "02:00 PM",
        duration: "1.5 hours",
        location: "Arts Building Hall 2",
        status: "Upcoming",
      },
    },
    Tuesday: {
      "10:00 AM": {
        code: "PHY104",
        name: "Fundamentals of Physics",
        date: "6/5/2025",
        time: "10:00 AM",
        duration: "3 hours",
        location: "Science Block Room 10",
        status: "Upcoming",
      },
      "2:00 PM": {
        code: "CHEM101",
        name: "General Chemistry",
        date: "6/6/2025",
        time: "02:00 PM",
        duration: "2 hours",
        location: "Science Block Room 3",
        status: "Upcoming",
      },
    },
    Wednesday: {
      "9:00 AM": {
        code: "CS201",
        name: "Data Structures",
        date: "6/7/2025",
        time: "09:00 AM",
        duration: "3 hours",
        location: "Computer Lab 1",
        status: "Upcoming",
      },
      "1:00 PM": {
        code: "MAT202",
        name: "Linear Algebra",
        date: "6/8/2025",
        time: "01:00 PM",
        duration: "2 hours",
        location: "Science Block Room 5",
        status: "Upcoming",
      },
    },
    Thursday: {
      "10:00 AM": {
        code: "PHY201",
        name: "Electromagnetism",
        date: "6/9/2025",
        time: "10:00 AM",
        duration: "3 hours",
        location: "Science Block Room 10",
        status: "Upcoming",
      },
      "2:00 PM": {
        code: "ENG201",
        name: "Technical Writing",
        date: "6/10/2025",
        time: "02:00 PM",
        duration: "1.5 hours",
        location: "Arts Building Hall 1",
        status: "Upcoming",
      },
    },
    Friday: {
      "11:00 AM": {
        code: "CS301",
        name: "Database Systems",
        date: "6/11/2025",
        time: "11:00 AM",
        duration: "3 hours",
        location: "Computer Lab 2",
        status: "Upcoming",
      },
      "3:00 PM": {
        code: "MAT301",
        name: "Differential Equations",
        date: "6/12/2025",
        time: "03:00 PM",
        duration: "2 hours",
        location: "Science Block Room 5",
        status: "Upcoming",
      },
    },
  };

  return (
    <SidebarLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Student Timetable</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time}>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-900">
                    {time}
                  </td>
                  {days.map((day) => (
                    <td
                      key={`${day}-${time}`}
                      className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500"
                    >
                      {timetable[day][time] ? (
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">
                            {timetable[day][time].code}
                          </div>
                          <div className="text-gray-600">
                            {timetable[day][time].name}
                          </div>
                          <div className="text-sm text-gray-500">
                            <div>{timetable[day][time].duration}</div>
                            <div>{timetable[day][time].location}</div>
                          </div>
                        </div>
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default TimetablePage;
