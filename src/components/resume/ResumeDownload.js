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
        
        // Cleanup
        return () => {
            if (pdfUrl) {
                window.URL.revokeObjectURL(pdfUrl);
            }
        };
    }, []);

    const handleDownload = () => {
        if (pdfUrl) {
            // If pre-loaded PDF is available
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.setAttribute('download', 'ShashankSigdel_Resume.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            // Fallback direct download
            const link = document.createElement('a');
            link.href = resume;
            link.setAttribute('download', 'ShashankSigdel_Resume.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <>
            {/* Preload link for the PDF */}
            <link rel="prefetch" href={resume} as="fetch" />
            
            <button 
                onClick={handleDownload}
                className="fixed top-8 left-8 bg-designColor p-3 rounded-full shadow-lg hover:scale-110 transition-transform group z-50 flex items-center gap-2 pr-4"
                aria-label="Download Resume"
            >
                <FaDownload className="w-6 h-6 text-white pl-1 m-3" />
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-full whitespace-nowrap ml-2">
                    Download Resume
                </span>
            </button>
        </>
    );
};

export default ResumeDownload;