import React from "react";

const DepartmentLecturers: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Department Lecturers</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search lecturers..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Specializations</option>
              <option value="computer-science">Computer Science</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add Lecturer
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Lecturer Card */}
          <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Dr. John Doe</h3>
                <p className="text-gray-600">Computer Science</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Email:</span>{" "}
                john.doe@university.edu
              </p>
              <p className="text-sm">
                <span className="font-medium">Courses:</span> 4
              </p>
              <p className="text-sm">
                <span className="font-medium">Status:</span>{" "}
                <span className="text-green-500">Active</span>
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="text-blue-500 hover:text-blue-600">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-600">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentLecturers;
