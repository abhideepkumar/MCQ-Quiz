import { useState } from 'react';

const ParticipantForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [usn, setUsn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, usn });
  };

  return (
    <form className="max-w-sm mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Participant Details</h2>
      <div className="mb-4">
        <label htmlFor="name" className="text-sm mb-1 block">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          className="w-full p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          className="w-full p-2 border border-gray-300 rounded"
          value={usn}
          onChange={(e) => setUsn(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
        onClick={handleSubmit}
      >
        Start Quiz
      </button>
    </form>
  );
};

export default ParticipantForm;
