import React from "react";
import { Link } from "react-router-dom";
import {
  Book,
  Search,
  ArrowLeftRight,
  Barcode,
  Settings,
  History,
  RefreshCw,
  FileText,
  Tag,
} from "lucide-react";

const LibrarianDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Librarian Dashboard
      </h1>
      <p className="mb-6">Manage your library resources efficiently.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          to="/library/books"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <Book className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Manage Books</h2>
          </div>
          <p className="text-gray-600">Manage library books</p>
        </Link>
        <Link
          to="/library/search"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <Search className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Search Book</h2>
          </div>
          <p className="text-gray-600">Search for a book here</p>
        </Link>
        <Link
          to="/library/return"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <ArrowLeftRight className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Return Book</h2>
          </div>
          <p className="text-gray-600">Manage book returns</p>
        </Link>
        <Link
          to="/library/issue"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <ArrowLeftRight className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Issue Books</h2>
          </div>
          <p className="text-gray-600">Issue books here</p>
        </Link>
        <Link
          to="/library/barcode"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <Barcode className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Manage Barcode</h2>
          </div>
          <p className="text-gray-600">Manage book's barcode</p>
        </Link>
        <Link
          to="/library/settings"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <Settings className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Library Setting</h2>
          </div>
          <p className="text-gray-600">Initial library setting for courses</p>
        </Link>
        <Link
          to="/library/movement"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <History className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Movement Log</h2>
          </div>
          <p className="text-gray-600">Issued/Renewed Book Status</p>
        </Link>
        <Link
          to="/library/renewal"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <RefreshCw className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Book Renewal</h2>
          </div>
          <p className="text-gray-600">Renew books here</p>
        </Link>
        <Link
          to="/library/details"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <FileText className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Manage Book Additional Details</h2>
          </div>
          <p className="text-gray-600">Additional details</p>
        </Link>
        <Link
          to="/library/fines"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <FileText className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Library Fine Receipts</h2>
          </div>
          <p className="text-gray-600">Library Fine Receipts</p>
        </Link>
        <Link
          to="/library/tags"
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
        >
          <div className="flex items-center mb-2">
            <Tag className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="font-semibold">Manage Tags</h2>
          </div>
          <p className="text-gray-600">Manage Tags</p>
        </Link>
      </div>
    </div>
  );
};

export default LibrarianDashboard;
