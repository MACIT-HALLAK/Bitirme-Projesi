import React, { useState } from 'react';
import './AddBook.css';

const CustomFileInput = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0]['name'];
    const fileName = e.target.files[0];
    console.log(file);
    onFileSelect(fileName);
    setSelectedFile(fileName);
  };

  return (
    <div className="custom-file-input">
      <label htmlFor="file-input">
        {selectedFile ? selectedFile.name : 'Choose image'}
      </label>
      <input
        type="file"
        id="file-input"
        onChange={handleFileChange}
        // accept=".jpg,.jpeg,.png"
        required
      />
    </div>
  );
};

export default CustomFileInput;
