import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FileUpload() {
  const [file, setFile] = useState(null); // State to store the selected file
  const [uploading, setUploading] = useState(false); // State to track upload progress
  const [progress, setProgress] = useState(0); // State to track upload progress percentage
  const [files, setFiles] = useState([]); // State to store the list of files

  // Fetch the list of files on component mount
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/files');
        setFiles(response.data); // Update the files state with the fetched data
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // Append the file to the form data

    try {
      setUploading(true); // Start uploading
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
        onUploadProgress: (progressEvent) => {
          // Calculate upload progress percentage
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted); // Update progress state
        },
      });

      // Handle successful upload
      alert('File uploaded successfully!');
      console.log('File URL:', response.data.fileUrl);

      // Refresh the file list after upload
      const updatedFiles = await axios.get('http://localhost:5000/files');
      setFiles(updatedFiles.data);
    } catch (error) {
      // Handle upload error
      alert('File upload failed. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setUploading(false); // Stop uploading
      setProgress(0); // Reset progress
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload a File</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
        disabled={uploading}
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>

      {/* Progress Bar */}
      {uploading && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-green-500 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        </div>
      )}

      {/* Display the list of uploaded files */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Uploaded Files:</h3>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="text-sm text-gray-700">
              {file.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
