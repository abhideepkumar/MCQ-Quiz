import React, { useState } from "react";
const ParticipantForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "", usn: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Join the Quiz</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="text-sm mb-1 block">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="usn" className="text-sm mb-1 block">
          USN Number
        </label>
        <input
          type="text"
          id="usn"
          name="usn"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.usn}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        onClick={handleSubmit}
      >
        Start Quiz
      </button>
    </form>
  );
};

export default ParticipantForm;
