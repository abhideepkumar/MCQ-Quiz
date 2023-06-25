import React, { useState } from 'react';
import excelExporter from '../utils/excelExporter';

const AdminPage = ({ participantData }) => {
  const [exported, setExported] = useState(false);

  const handleExportData = () => {
    const dataWithScore = participantData.map((participant) => ({
      ...participant,
      score: participant.score || "who knows",
    }));
    excelExporter(dataWithScore);
    setExported(true);
  };
console.log("from ADMIN",participantData)
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      {participantData && participantData.length > 0 ? (
        <div>
          <p>Total Participants: {participantData.length}</p>
          <button
            onClick={handleExportData}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 mt-4"
          >
            Export Data as Excel
          </button>
          {exported && (
            <p className="mt-2 text-green-600">Data exported successfully!</p>
          )}
        </div>
      ) : (
        <p>No participant data available.</p>
      )}
    </div>
  );
};

export default AdminPage;
