import React from 'react';

const DownloadResumeButton = () => {
  const handleDownload = () => {
    // Assuming your resume file is in the public folder and named resume.pdf
    const resumePath = process.env.PUBLIC_URL + '/resume.pdf';
    window.open(resumePath, '_blank');
  };

  return (
    <button onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
