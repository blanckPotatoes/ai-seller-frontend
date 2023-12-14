import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserProfileAPI } from "../../apis/user/usersAPI";
import _ from "lodash"; // Import lodash for randomization

const Dashboard = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryFn: getUserProfileAPI,
    queryKey: ["profile"],
  });

  // Array of possible Bootstrap classes (excluding white background)
  const bootstrapClasses = [
    "bg-light",
    "bg-primary",
    "bg-success",
    "bg-info",
  ];

  const bootstrapColors = [
    "text-blue-600",
    "text-green-600",
    "text-indigo-600",
    "text-red-600",
    "text-purple-600",
  ];

  // Function to generate random Bootstrap class
  const getRandomBootstrapClass = () => {
    return _.sample(bootstrapClasses);
  };

  // Function to generate random Bootstrap color
  const getRandomBootstrapColor = () => {
    return _.sample(bootstrapColors);
  };

  if (!isLoading && !isError) {
    return (
      <div className={`mx-auto p-4 bg-gray-900 w-screen h-screen`}>
        <h1 className={`text-3xl font-bold text-center mb-8 ${getRandomBootstrapColor()}`}>
          User Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Section */}
          <div className={`mb-6 bg-white p-4 col-xl-4 col-lg-4 shadow rounded-lg`}>
            <h2 className={`text-xl font-semibold mb-4 ${getRandomBootstrapColor()}`}>
              Profile Information
            </h2>
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Name
                </label>
                <p
                  className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight ${getRandomBootstrapColor()}`}
                  id="username"
                >
                  {data.user.username}
                </p>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <p
                  className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight ${getRandomBootstrapColor()}`}
                  id="email"
                >
                  {data.user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Credit Usage Section */}
          <div className={`mb-6 bg-white p-4 col-xl-4 col-lg-4 shadow rounded-lg`}>
            <h2 className={`text-xl font-semibold mb-4 ${getRandomBootstrapColor()}`}>
              Credit Usage
            </h2>
            <div>
              <p className={`mb-4 ${getRandomBootstrapColor()}`}>Monthly Credit: {data?.user?.monthlyRequestCount}</p>
              <p className={`mb-4 ${getRandomBootstrapColor()}`}>Credit Used:{data?.user?.apiRequestCount}</p>
              <p className={`mb-4 ${getRandomBootstrapColor()}`}>Credit Remaining: {data?.user?.monthlyRequestCount - data?.user?.apiRequestCount}</p>
            </div>
          </div>

          {/* Payment and Plans Section */}
          <div className={`mb-6 bg-white p-4 col-xl-4 col-lg-4 shadow rounded-lg`}>
            <h2 className={`text-xl font-semibold mb-4 ${getRandomBootstrapColor()}`}>
              Payment & Plans
            </h2>
            <div>
              <p className={`mb-4 ${getRandomBootstrapColor()}`}>Current Plan: Example Plan</p>
              <Link
                to="/plans"
                className=" py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upgrade Plan
              </Link>
            </div>
          </div>

          {/* Trial Information Section */}
          <div className={`mb-6 bg-white p-4 col-xl-4 col-lg-4 shadow rounded-lg`}>
            <h2 className={`text-xl font-semibold mb-4 ${getRandomBootstrapColor()}`}>
              Trial Information
            </h2>
            <div>
              <p className={`mb-4 ${getRandomBootstrapColor()}`}>Trial Status: {data.user.trialActive ? "Active" : "Expired"}</p>
              <p className={`mb-4 ${getRandomBootstrapColor()}`}>Expires on: {data.user.trialExpires}</p>
              <Link
                to="/plans"
                className=" py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upgrade to Premium
              </Link>
            </div>
          </div>

          {/* History Section */}
        </div>
      </div>
    );
  }
};

export default Dashboard;
