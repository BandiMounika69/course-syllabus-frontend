import React, { useState } from 'react';
import { Circles } from 'react-loader-spinner'; // Import the Circles loader
import { jsPDF } from 'jspdf';

const DownloadSyllabusButton = ({ courseId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/api/syllabus/${courseId}`);
      const data = await response.json();
      console.log('Fetched syllabus data:', data);

      if (!data || !data.syllabus) {
        throw new Error('Syllabus data is missing');
      }
      const {courseTitle} = data;
      const doc = new jsPDF();
      
      doc.text(`${courseTitle} Syllabus`, 10, 10);
      doc.text(data.syllabus, 10, 20);
      doc.save(`${courseTitle} Syllabus.pdf`);

      setLoading(false);
    } catch (error) {
      console.error('Error downloading syllabus:', error);
      setError('Failed to download syllabus. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className='page-container'>      
        <button onClick={handleDownload} className='bn39'>
        { !loading ?"Download Syllabus": <Circles height="20" width="20" color="black" ariaLabel="loading" />}
        </button>
        {error && <p>{error}</p>}
    </div>
  );
};

export default DownloadSyllabusButton;
