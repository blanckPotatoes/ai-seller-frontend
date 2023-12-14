import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {useMutation, useQuery}  from "@tanstack/react-query"
import StatusMessage from "../Alert/StatusMessage";
import { getUserProfileAPI } from "../../apis/user/usersAPI";
import { userGenerateContentAPI } from "../../apis/chatGPT/chatGPT";


const BlogPostAIAssistant = () => {
  const [generatedContent, setGeneratedContent] = useState("");
  // get the user profile
  const {isLoading, isError, data, error} = useQuery({
    queryFn: getUserProfileAPI,
    queryKey:["profile"],
  });

  // mutation
  const mutation = useMutation({
    mutationFn: userGenerateContentAPI,
    onMutate:() =>{
      setGeneratedContent(`Generated content for prompt: Now Loading`);
    },
    onSuccess: (data) => {
      // Use the response data here
      setGeneratedContent(`Generated content for prompt: ${data}`);
    },
  });
  // console.log(`AFTER: ${mutation?.data}`)
  // Formik setup for handling form data
  const formik = useFormik({
    initialValues: {
      prompt: "",
    },
    validationSchema: Yup.object({
      prompt: Yup.string().required("A prompt is required"),
    }),
    onSubmit: (values) => {
      // Simulate content generation based on form values
      // console.log(values);
      mutation.mutate(values.prompt)
      setGeneratedContent(`Generated content for prompt: ${mutation?.data}`);
    },
  });

  //display error
  if (isError) {
    return <StatusMessage type="error" message={error?.response?.data.message}/>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-900 flex justify-center items-center p-6">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl w-full p-6">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          ChatGPT 3.5+
        </h2>

        {/* Static display for Plan and Credits */}
        <div className="flex">
          <div className="m-5">
            <span className="text-sm font-bold bg-green-200 px-4 py2 rounded full">
              CreditLeft: {data?.user?.monthlyRequestCount - data?.user?.apiRequestCount}
            </span>
          </div>
        </div>

        {/* Form for generating content */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Prompt input field */}
          <div>
            <label
              htmlFor="prompt"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Enter a topic or idea
            </label>
            <input
              id="prompt"
              type="text"
              {...formik.getFieldProps("prompt")}
              className="px-4 py-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter a topic or idea"
            />
            {formik.touched.prompt && formik.errors.prompt && (
              <div className="text-red-500 mt-1">{formik.errors.prompt}</div>
            )}
          </div>




          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate Content
          </button>
          {/* Link to view history */}
          <Link to="/history">View history</Link>
        </form>

        {/* Display generated content */}
        {generatedContent && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Generated Content:
            </h3>
            <p className="text-gray-600">{generatedContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostAIAssistant;
