import React, { useState } from 'react';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // Here you can handle the file upload logic
    // For example, send the file to a server using fetch or axios
    // You can access the selected file using selectedFile state
    // and then perform the upload operation
    console.log('Upload logic here:', selectedFile);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          className="mb-4 max-w-xs max-h-xs"
        />
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={!selectedFile}
      >
        Upload
      </button>
    </div>
  );
}

export default FileUploader;
