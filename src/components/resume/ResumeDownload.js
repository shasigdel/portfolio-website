import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import { resume } from '../../assets';

const ResumeDownload = () => {
    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {
        // Pre-load the PDF
        fetch(resume)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                setPdfUrl(url);
            });

        // Cleanup function
        return () => {
            if (pdfUrl) {
                window.URL.revokeObjectURL(pdfUrl);
            }
        };
    }, [pdfUrl]); // Changed dependency to resume instead of pdfUrl

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl || resume;
        link.setAttribute('download', 'ShashankSigdel_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button 
            onClick={handleDownload}
            className="fixed top-8 left-8 bg-blue-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform group z-50 flex items-center gap-2 pr-4"
            aria-label="Download Resume"
        >
            <FaDownload className="w-6 h-6 text-white pl-1 ml-1 mr-0" />
            <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-full whitespace-nowrap ml-2">
                Download Resume
            </span>
            <h1 className='text-white'>Resume</h1>
        </button>
    );
};

export default ResumeDownload;