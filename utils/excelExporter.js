  import ExcelJS from 'exceljs';

  const excelExporter = async (participantData) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Participants');
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'USN Number', key: 'usn', width: 15 },
      { header: 'Score', key: 'score', width: 10 },
    ];

    // Add participant data to the worksheet
    participantData.forEach((participant) => {
      worksheet.addRow({
        name: participant.name,
        email: participant.email,
        usn: participant.usn,
        score: participant.score,
      });
    });

    // Generate the Excel file
    const buffer = await workbook.xlsx.writeBuffer();

    // Save the file
    const filename = 'participant_data.xlsx';
    saveAsExcelFile(buffer, filename);
  };

  const saveAsExcelFile = (buffer, filename) => {
    const data = new Blob([buffer], { type: 'application/octet-stream' });

    if (typeof window !== 'undefined') {
      // Check if the `saveAs` function is supported by the browser
      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // For IE and Edge
        window.navigator.msSaveBlob(data, filename);
      } else {
        // For other browsers
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        window.URL.revokeObjectURL(url);
      }
    }
  };

  export default excelExporter;
