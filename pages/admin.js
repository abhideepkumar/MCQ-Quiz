import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { exportExcel } from '../utils/excelExporter'; // Custom function to export data as Excel

const AdminPage = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    // Fetch participants data from the server
    axios.get('/api/participants').then((response) => {
      setParticipants(response.data);
    });
  }, []);

  const handleDownloadExcel = () => {
    // Convert participants data to Excel format
    const excelData = participants.map((participant) => ({
      Name: participant.name,
      Email: participant.email,
      'USN Number': participant.usn,
    }));

    // Export data as Excel file
    exportExcel(excelData, 'participants.xlsx');
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={handleDownloadExcel}>Download Excel</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>USN Number</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={index}>
              <td>{participant.name}</td>
              <td>{participant.email}</td>
              <td>{participant.usn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
